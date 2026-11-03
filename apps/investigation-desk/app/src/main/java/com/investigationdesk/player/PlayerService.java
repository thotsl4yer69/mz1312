package com.investigationdesk.player;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Intent;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.ServiceInfo;
import android.media.AudioAttributes;
import android.media.AudioManager;
import android.media.MediaMetadata;
import android.media.MediaPlayer;
import android.media.PlaybackParams;
import android.media.session.MediaSession;
import android.media.session.PlaybackState;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import org.json.JSONArray;
import org.json.JSONObject;
import java.util.ArrayList;
import java.util.List;
import java.io.File;
import java.io.InputStream;
import java.io.ByteArrayOutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Locale;

public class PlayerService extends Service {
    public static volatile PlayerService instance;
    private static final int NOTIFICATION_ID=7701;
    private static final String CHANNEL="investigation_desk_playback";
    private static final String PREFS="desk_player_v1";
    private final Handler ui=new Handler(Looper.getMainLooper());
    private final List<Track> tracks=new ArrayList<>();
    private MediaPlayer player;
    private MediaSession session;
    private AudioManager audioManager;
    private TextToSpeech tts;
    private boolean ttsReady=false, speechMode=false, playing=false, foreground=false;
    private String currentId="",error="";
    private float speed=1f;
    private long sleepUntil=0L;
    private int speechGeneration=0, speechIndex=0;
    private List<String> speechChunks=new ArrayList<>();
    private SharedPreferences preferences;
    private String restoredId="";
    private int restoredPosition=0;

    private static final class Track {
        final String id,title,unit,code,type;
        Track(JSONObject j){
            id=j.optString("id");title=j.optString("title");unit=j.optString("unit");
            code=j.optString("code");type=j.optString("type");
        }
    }

    @Override public void onCreate(){
        super.onCreate();instance=this;
        preferences=getSharedPreferences(PREFS,MODE_PRIVATE);
        restoredId=preferences.getString("id","");
        restoredPosition=preferences.getInt("position",0);
        speed=preferences.getFloat("speed",1f);
        audioManager=(AudioManager)getSystemService(AUDIO_SERVICE);
        try(InputStream in=getAssets().open("catalog.json")){
            String json=readFully(in);
            JSONArray list=new JSONArray(json);
            for(int i=0;i<list.length();i++) tracks.add(new Track(list.getJSONObject(i)));
        }catch(Exception e){error="Unable to load course catalog: "+e.getMessage();}
        NotificationManager manager=(NotificationManager)getSystemService(NOTIFICATION_SERVICE);
        manager.createNotificationChannel(new NotificationChannel(CHANNEL,"Investigation Desk audio",NotificationManager.IMPORTANCE_LOW));
        session=new MediaSession(this,"InvestigationDesk");
        session.setFlags(MediaSession.FLAG_HANDLES_MEDIA_BUTTONS|MediaSession.FLAG_HANDLES_TRANSPORT_CONTROLS);
        session.setCallback(new MediaSession.Callback() {
            @Override public void onPlay(){resumePlayback();}
            @Override public void onPause(){pausePlayback();}
            @Override public void onSkipToNext(){nextTrack();}
            @Override public void onSkipToPrevious(){previousTrack();}
            @Override public void onSeekTo(long pos){seekTo((int)pos);}
            @Override public void onStop(){pausePlayback();}
        });
        session.setActive(true);
        tts=new TextToSpeech(getApplicationContext(),status->{
            ttsReady=status==TextToSpeech.SUCCESS;
            if(ttsReady){
                tts.setLanguage(new Locale("en","AU"));
                tts.setSpeechRate(speed);
                tts.setOnUtteranceProgressListener(new UtteranceProgressListener(){
                    @Override public void onStart(String id){
                        try{
                            if(id!=null && id.startsWith("deskspeech-"+speechGeneration+"-")){
                                speechIndex=Integer.parseInt(id.substring(id.lastIndexOf('-')+1));
                            }
                        }catch(Exception ignored){}
                    }
                    @Override public void onError(String id){ }
                    @Override public void onDone(String id){
                        if(id==null)return;
                        String expected="deskspeech-"+speechGeneration+"-"+(speechChunks.size()-1);
                        if(id.equals(expected)){
                            ui.post(()->{
                                if(speechMode && playing && id.equals("deskspeech-"+speechGeneration+"-"+(speechChunks.size()-1)))nextTrack();
                            });
                        }
                    }
                });
            }
        });
        ui.postDelayed(new Runnable(){
            @Override public void run(){
                if(playing && sleepUntil>0 && System.currentTimeMillis()>=sleepUntil){sleepUntil=0;pausePlayback();}
                if(playing)savePosition();
                ui.postDelayed(this,3000);
            }
        },3000);
    }

    @Override public int onStartCommand(Intent intent,int flags,int startId){
        if(intent!=null&&intent.getAction()!=null){
            String action=intent.getAction();
            if(action.equals("PREVIOUS"))previousTrack();
            else if(action.equals("NEXT"))nextTrack();
            else if(action.equals("TOGGLE")){if(playing)pausePlayback();else resumePlayback();}
            else if(action.equals("PAUSE"))pausePlayback();
        }
        return START_STICKY;
    }
    @Override public IBinder onBind(Intent i){return null;}

    private String readFully(InputStream in) throws Exception{
        ByteArrayOutputStream out=new ByteArrayOutputStream();byte[] buffer=new byte[8192];int n;
        while((n=in.read(buffer))!=-1)out.write(buffer,0,n);
        return out.toString("UTF-8");
    }
    private Track getTrack(String id){for(Track t:tracks)if(t.id.equals(id))return t;return null;}
    private int trackIndex(String id){for(int i=0;i<tracks.size();i++)if(tracks.get(i).id.equals(id))return i;return -1;}
    private File audioFile(String id){return new File(new File(getFilesDir(),"audio"),id+".m4a");}
    private void savePosition(){
        if(currentId.isEmpty())return;
        try{
            int pos=player!=null?player.getCurrentPosition():0;
            preferences.edit().putString("id",currentId).putInt("position",pos).putFloat("speed",speed).apply();
        }catch(Exception ignored){}
    }
    public synchronized JSONObject getState(){
        JSONObject j=new JSONObject();
        try{
            int pos=0,dur=0;
            if(player!=null){
                try{pos=player.getCurrentPosition();dur=player.getDuration();}catch(Exception ignored){}
            }else if(!playing&&currentId.equals(restoredId)&&!currentId.isEmpty())pos=restoredPosition;
            JSONArray ready=new JSONArray();
            int installed=0;
            for(Track t:tracks){
                if(audioFile(t.id).isFile()){installed++;ready.put(t.id);}
            }
            j.put("id",currentId.isEmpty()?restoredId:currentId);
            j.put("playing",playing);
            j.put("speech",speechMode);
            j.put("position",pos);
            j.put("duration",dur);
            j.put("speed",speed);
            j.put("error",error);
            j.put("installed",installed);
            j.put("available",ready);
            j.put("sleepRemaining",sleepUntil>0?Math.max(0,(sleepUntil-System.currentTimeMillis())/1000):0);
            j.put("ttsReady",ttsReady);
        }catch(Exception ignored){}
        return j;
    }
    private void releaseAudio(){
        if(player!=null){
            try{player.stop();}catch(Exception ignored){}
            try{player.release();}catch(Exception ignored){}
            player=null;
        }
        if(tts!=null)tts.stop();
        ++speechGeneration;speechMode=false;playing=false;
    }
    public synchronized void playId(String id){
        Track t=getTrack(id);
        if(t==null){error="This lesson does not exist";return;}
        if(id.equals(currentId)&&!playing && player!=null){resumePlayback();return;}
        savePosition();
        releaseAudio();
        currentId=id;error="";
        restoredId=id;restoredPosition=0;
        File file=audioFile(id);
        if(file.isFile()){
            speechMode=false;
            try{
                player=new MediaPlayer();
                player.setAudioAttributes(new AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_MEDIA).setContentType(AudioAttributes.CONTENT_TYPE_SPEECH).build());
                player.setWakeMode(this,android.os.PowerManager.PARTIAL_WAKE_LOCK);
                player.setDataSource(file.getAbsolutePath());
                player.setOnCompletionListener(mp->ui.post(this::nextTrack));
                player.setOnErrorListener((mp,what,extra)->{error="Audio could not play. Please reimport that recording.";pausePlayback();return true;});
                player.prepare();
                if(id.equals(preferences.getString("id",""))){
                    int old=preferences.getInt("position",0);
                    if(old>0&&old<player.getDuration()-3000)player.seekTo(old);
                }
                audioManager.requestAudioFocus(null,AudioManager.STREAM_MUSIC,AudioManager.AUDIOFOCUS_GAIN);
                player.start();
                applySpeed();
                playing=true;
                updateSession();updateNotification();
            }catch(Exception ex){
                releaseAudio();error="Could not open recording: "+ex.getMessage();
            }
        }else if(!t.type.equals("original")){
            speechMode=true;playing=true;
            speechChunks=loadSpeech(id);speechIndex=0;
            if(speechChunks.isEmpty()){playing=false;error="Companion text unavailable";return;}
            beginSpeech();
        }else{
            playing=false;
            error="Recording "+id+" is not installed. Use Import Audio Pack to add it.";
        }
        preferences.edit().putString("id",id).putInt("position",0).apply();
    }
    private List<String> loadSpeech(String id){
        List<String> out=new ArrayList<>();
        try(InputStream in=getAssets().open("repairs/"+id+".txt")){
            String text=readFully(in).replaceAll("\\s+"," ").trim();
            // Android's speech engine has an upper text size limit. Split on word boundaries.
            while(!text.isEmpty()){
                int cut=Math.min(text.length(),2900);
                if(cut<text.length()){int p=text.lastIndexOf(' ',cut);if(p>1800)cut=p;}
                String part=text.substring(0,cut).trim();
                if(!part.isEmpty())out.add(part);
                text=text.substring(cut).trim();
            }
        }catch(Exception e){error="Companion narration unavailable";}
        return out;
    }
    private void beginSpeech(){
        if(!ttsReady){error="Preparing phone speech engine…";ui.postDelayed(()->{if(speechMode && playing){if(ttsReady)beginSpeech();else{playing=false;error="Phone speech engine is not ready.";}}},1200);return;}
        int gen=speechGeneration;
        tts.setSpeechRate(speed);
        for(int i=speechIndex;i<speechChunks.size();i++){
            String utterance="deskspeech-"+gen+"-"+i;
            tts.speak(speechChunks.get(i),i==speechIndex?TextToSpeech.QUEUE_FLUSH:TextToSpeech.QUEUE_ADD,null,utterance);
        }
        error="";updateSession();updateNotification();
    }
    public synchronized void pausePlayback(){
        if(!playing)return;
        savePosition();
        if(player!=null){try{player.pause();}catch(Exception ignored){}}
        if(speechMode && tts!=null){tts.stop();++speechGeneration;}
        playing=false;updateSession();updateNotification();
    }
    public synchronized void resumePlayback(){
        if(currentId.isEmpty()){String id=restoredId;if(id.isEmpty()&&!tracks.isEmpty())id=tracks.get(0).id;playId(id);return;}
        if(playing)return;
        if(player!=null){
            try{player.start();playing=true;updateSession();updateNotification();}catch(Exception ex){error="Cannot resume: "+ex.getMessage();}
        }else if(speechMode){playing=true;beginSpeech();}
        else playId(currentId);
    }
    public synchronized void nextTrack(){
        int idx=trackIndex(currentId); if(idx<0)idx=-1;
        if(idx+1<tracks.size())playId(tracks.get(idx+1).id);
        else pausePlayback();
    }
    public synchronized void previousTrack(){
        if(player!=null&&player.getCurrentPosition()>12000){seekTo(0);return;}
        int idx=trackIndex(currentId);
        if(idx>0)playId(tracks.get(idx-1).id);
        else if(idx==0)seekTo(0);
    }
    public synchronized void seekTo(int ms){
        if(player==null)return;
        try{player.seekTo(Math.min(player.getDuration(),Math.max(0,ms)));savePosition();updateSession();}catch(Exception ignored){}
    }
    public synchronized void setSpeed(float value){
        if(value<0.75f||value>2.25f)return;
        speed=value;
        preferences.edit().putFloat("speed",speed).apply();
        applySpeed();
        if(tts!=null)tts.setSpeechRate(speed);
        updateSession();
    }
    private void applySpeed(){
        if(player!=null && Build.VERSION.SDK_INT>=23){
            try{player.setPlaybackParams(new PlaybackParams().setSpeed(speed));}catch(Exception ignored){}
        }
    }
    public synchronized void sleepIn(int minutes){
        if(minutes<=0)sleepUntil=0;
        else sleepUntil=System.currentTimeMillis()+minutes*60000L;
    }
    private void updateSession(){
        if(session==null)return;
        Track track=getTrack(currentId);
        if(track!=null){
            MediaMetadata.Builder meta=new MediaMetadata.Builder().putString(MediaMetadata.METADATA_KEY_TITLE,track.title).putString(MediaMetadata.METADATA_KEY_ARTIST,"The Investigation Desk").putString(MediaMetadata.METADATA_KEY_ALBUM,track.code);
            try{if(player!=null)meta.putLong(MediaMetadata.METADATA_KEY_DURATION,player.getDuration());}catch(Exception ignored){}
            session.setMetadata(meta.build());
        }
        int pos=0;try{if(player!=null)pos=player.getCurrentPosition();}catch(Exception ignored){}
        session.setPlaybackState(new PlaybackState.Builder()
            .setActions(PlaybackState.ACTION_PLAY|PlaybackState.ACTION_PAUSE|PlaybackState.ACTION_PLAY_PAUSE|
                        PlaybackState.ACTION_SKIP_TO_NEXT|PlaybackState.ACTION_SKIP_TO_PREVIOUS|PlaybackState.ACTION_SEEK_TO|PlaybackState.ACTION_STOP)
            .setState(playing?PlaybackState.STATE_PLAYING:PlaybackState.STATE_PAUSED,pos,playing?speed:0f).build());
    }
    private PendingIntent action(String name,int code){
        Intent i=new Intent(this,PlayerService.class).setAction(name);
        return PendingIntent.getService(this,code,i,PendingIntent.FLAG_UPDATE_CURRENT|PendingIntent.FLAG_IMMUTABLE);
    }
    private void updateNotification(){
        if(session==null||currentId.isEmpty())return;
        Track t=getTrack(currentId);
        if(t==null)return;
        Intent open=new Intent(this,MainActivity.class);
        PendingIntent openPi=PendingIntent.getActivity(this,7700,open,PendingIntent.FLAG_UPDATE_CURRENT|PendingIntent.FLAG_IMMUTABLE);
        Notification n=new Notification.Builder(this,CHANNEL)
            .setSmallIcon(R.drawable.ic_app)
            .setContentTitle(t.title)
            .setContentText("The Investigation Desk · "+t.code+(speechMode?" · Spoken study guide":""))
            .setContentIntent(openPi)
            .setShowWhen(false)
            .setOnlyAlertOnce(true)
            .setOngoing(playing)
            .addAction(new Notification.Action.Builder(android.R.drawable.ic_media_previous,"Previous",action("PREVIOUS",7702)).build())
            .addAction(new Notification.Action.Builder(playing?android.R.drawable.ic_media_pause:android.R.drawable.ic_media_play,playing?"Pause":"Play",action("TOGGLE",7703)).build())
            .addAction(new Notification.Action.Builder(android.R.drawable.ic_media_next,"Next",action("NEXT",7704)).build())
            .setStyle(new Notification.MediaStyle().setMediaSession(session.getSessionToken()).setShowActionsInCompactView(0,1,2))
            .build();
        try{
            if(playing){
                if(Build.VERSION.SDK_INT>=29)startForeground(NOTIFICATION_ID,n,ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK);
                else startForeground(NOTIFICATION_ID,n);
                foreground=true;
            }else{
                if(foreground){
                    stopForeground(false);foreground=false;
                }
                ((NotificationManager)getSystemService(NOTIFICATION_SERVICE)).notify(NOTIFICATION_ID,n);
            }
        }catch(Exception ex){error="Background playback notification: "+ex.getMessage();}
    }
    @Override public void onDestroy(){
        savePosition();releaseAudio();if(tts!=null){tts.shutdown();tts=null;}
        if(session!=null){session.setActive(false);session.release();session=null;}
        instance=null;super.onDestroy();
    }
}
