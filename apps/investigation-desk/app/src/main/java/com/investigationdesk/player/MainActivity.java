package com.investigationdesk.player;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;
import org.json.JSONObject;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.IOException;
import java.util.Locale;
import java.util.HashSet;
import java.util.Set;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

public class MainActivity extends Activity {
    private static final int PICK_PACK = 301;
    private WebView web;
    private final Handler main = new Handler(Looper.getMainLooper());
    private volatile boolean importing = false;
    private volatile String importMessage = "";
    private String catalogCache = "[]";

    @Override public void onCreate(Bundle saved) {
        super.onCreate(saved);
        getWindow().setStatusBarColor(0xff10141a);
        getWindow().setNavigationBarColor(0xff121720);
        try (InputStream in = getAssets().open("catalog.json")) {
            byte[] bytes = new byte[in.available()];
            int off = 0; while (off < bytes.length) { int n = in.read(bytes, off, bytes.length-off); if (n < 0) break; off += n; }
            catalogCache = new String(bytes, 0, off, java.nio.charset.StandardCharsets.UTF_8);
        } catch (IOException ignored) {}
        startService(new Intent(this, PlayerService.class));
        if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, 9);
        }
        web = new WebView(this);
        web.setBackgroundColor(0xff10141a);
        web.getSettings().setJavaScriptEnabled(true);
        web.getSettings().setDomStorageEnabled(true);
        web.getSettings().setAllowFileAccess(true);
        web.getSettings().setAllowContentAccess(false);
        web.getSettings().setJavaScriptCanOpenWindowsAutomatically(false);
        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient() {
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                if ("file".equals(uri.getScheme()) && "android_asset".equals(uri.getHost())) return false;
                if ("https".equals(uri.getScheme()) && ("training.gov.au".equals(uri.getHost()) || "www.training.gov.au".equals(uri.getHost()))) {
                    try { startActivity(new Intent(Intent.ACTION_VIEW, uri)); } catch (Exception ignored) {}
                }
                return true;
            }
        });
        web.addJavascriptInterface(new Bridge(), "Android");
        setContentView(web);
        web.loadUrl("file:///android_asset/index.html");
    }

    private void emit(String event, String value) {
        main.post(() -> {
            if (web == null) return;
            try {
                JSONObject obj = new JSONObject();
                obj.put("event", event);
                obj.put("value", value);
                web.evaluateJavascript("window.onNativeEvent && window.onNativeEvent(" + obj.toString() + ")", null);
            } catch (Exception ignored) {}
        });
    }

    private final class Bridge {
        @JavascriptInterface public String catalog() { return catalogCache; }
        @JavascriptInterface public String state() {
            try {
                JSONObject j = PlayerService.instance == null ? new JSONObject() : PlayerService.instance.getState();
                j.put("importing", importing);
                j.put("importMessage", importMessage);
                return j.toString();
            } catch (Exception e) { return "{}"; }
        }
        @JavascriptInterface public void play(String id) {
            main.post(() -> {
                PlayerService s = PlayerService.instance;
                if (s != null) s.playId(id);
            });
        }
        @JavascriptInterface public void pause() { main.post(() -> { PlayerService s=PlayerService.instance; if (s!=null)s.pausePlayback(); }); }
        @JavascriptInterface public void resume() { main.post(() -> { PlayerService s=PlayerService.instance; if (s!=null)s.resumePlayback(); }); }
        @JavascriptInterface public void next() { main.post(() -> { PlayerService s=PlayerService.instance; if (s!=null)s.nextTrack(); }); }
        @JavascriptInterface public void previous() { main.post(() -> { PlayerService s=PlayerService.instance; if (s!=null)s.previousTrack(); }); }
        @JavascriptInterface public void seek(int milliseconds) { main.post(() -> { PlayerService s=PlayerService.instance; if (s!=null)s.seekTo(milliseconds); }); }
        @JavascriptInterface public void speed(double rate) { main.post(() -> { PlayerService s=PlayerService.instance; if (s!=null)s.setSpeed((float)rate); }); }
        @JavascriptInterface public void sleep(int minutes) { main.post(() -> { PlayerService s=PlayerService.instance; if (s!=null)s.sleepIn(minutes); }); }
        @JavascriptInterface public void importPack() {
            main.post(() -> {
                if (importing) { Toast.makeText(MainActivity.this, "An import is already running", Toast.LENGTH_SHORT).show(); return; }
                Intent pick = new Intent(Intent.ACTION_OPEN_DOCUMENT);
                pick.addCategory(Intent.CATEGORY_OPENABLE);
                pick.setType("*/*");
                pick.putExtra(Intent.EXTRA_MIME_TYPES, new String[]{"application/zip","application/x-zip-compressed","application/octet-stream"});
                startActivityForResult(pick, PICK_PACK);
            });
        }
        @JavascriptInterface public void showToast(String message) {
            main.post(() -> Toast.makeText(MainActivity.this, message, Toast.LENGTH_LONG).show());
        }
        @JavascriptInterface public void openStandards(String code) {
            main.post(() -> {
                if (!code.matches("[A-Z]{3,8}[0-9]{3,4}")) return;
                try { startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("https://training.gov.au/training/details/"+code))); }
                catch (Exception ignored) {}
            });
        }
    }

    @Override protected void onActivityResult(int request, int result, Intent data) {
        super.onActivityResult(request,result,data);
        if (request != PICK_PACK || result != RESULT_OK || data == null || data.getData() == null) return;
        if (importing) return;
        Uri uri = data.getData();
        importing = true;
        importMessage = "Opening audio package…";
        emit("import", importMessage);
        new Thread(() -> importZip(uri), "audio-import").start();
    }

    private String idForEntry(String raw) {
        String name = raw.replace('\\','/');
        // Only accept known, strictly named audio files from this course, not paths from a ZIP.
        if (name.matches("audio/originals/ep(0[1-9]|[1-6][0-9]|7[01])\\.m4a")) {
            return name.substring(name.length()-8,name.length()-4).substring(2);
        }
        if (name.matches("audio/(F0[1-5]|S0[6-8]|FINAL)_[A-Za-z0-9_]+\\.m4a")) {
            String base=name.substring(name.lastIndexOf('/')+1);
            return base.startsWith("FINAL") ? "FIN" : base.substring(0,3);
        }
        return null;
    }

    private void importZip(Uri uri) {
        int count=0, rejected=0;
        long totalBytes=0;
        File directory = new File(getFilesDir(),"audio");
        if (!directory.exists() && !directory.mkdirs()) { finishImport("Cannot create audio storage"); return; }
        Set<String> imported = new HashSet<>();
        try (InputStream in=getContentResolver().openInputStream(uri)) {
            if (in==null) throw new IOException("Cannot open selected file");
            try (ZipInputStream zip = new ZipInputStream(in)) {
                ZipEntry entry;
                while ((entry=zip.getNextEntry())!=null) {
                    String id = idForEntry(entry.getName());
                    if (entry.isDirectory() || id==null) {zip.closeEntry();continue;}
                    File dest = new File(directory,id+".m4a");
                    File tmp = new File(directory,id+".part");
                    long fileBytes=0;
                    try(FileOutputStream out=new FileOutputStream(tmp)) {
                        byte[] buffer=new byte[65536];
                        int n;
                        while((n=zip.read(buffer))!=-1) {
                            fileBytes+=n;totalBytes+=n;
                            if(fileBytes>30000000L || totalBytes>2000000000L) throw new IOException("Archive exceeds import safety limit");
                            out.write(buffer,0,n);
                        }
                        out.getFD().sync();
                    }
                    if (fileBytes < 100000 || !looksLikeMp4(tmp)) {
                        tmp.delete();rejected++;zip.closeEntry();continue;
                    }
                    if (dest.exists() && !dest.delete()) throw new IOException("Cannot replace saved recording "+id);
                    if (!tmp.renameTo(dest)) throw new IOException("Cannot save recording "+id);
                    imported.add(id);
                    count++;
                    importMessage = "Imported "+count+" recordings";
                    if (count%4==0) emit("import",importMessage);
                    zip.closeEntry();
                }
            }
            if (count==0) throw new IOException("This ZIP has no supported course M4A files");
            finishImport("Installed "+imported.size()+" audio recordings"+(rejected>0?" ("+rejected+" invalid)": "")+". Ready to play offline.");
        } catch (Exception ex) {
            finishImport("Import stopped after "+count+" recordings: "+ex.getMessage());
        }
    }
    private boolean looksLikeMp4(File p) {
        try (java.io.FileInputStream f = new java.io.FileInputStream(p)) {
            byte[] b = new byte[12];
            if(f.read(b)!=12)return false;
            return b[4]=='f' && b[5]=='t' && b[6]=='y' && b[7]=='p';
        } catch (IOException ex) { return false; }
    }
    private void finishImport(String result) {
        importing = false;
        importMessage = result;
        emit("import",result);
        main.post(() -> Toast.makeText(MainActivity.this,result,Toast.LENGTH_LONG).show());
    }
    @Override protected void onDestroy() {
        if (web!=null) { web.removeJavascriptInterface("Android");web.destroy();web=null; }
        super.onDestroy();
    }
}
