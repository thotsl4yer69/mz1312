#!/usr/bin/env python3
"""Search for genuine public paid technical work, never contact buyers automatically."""
import datetime as dt
import json
import os
from pathlib import Path
import re
import time
import urllib.error
import urllib.parse
import urllib.request

ROOT=Path(__file__).resolve().parent
STATE=ROOT/"leads.json"
BOARD=ROOT/"opportunities.md"
NOW=dt.datetime.now(dt.timezone.utc)
SINCE=(NOW-dt.timedelta(days=35)).date().isoformat()
TOPICS=[
 ("ESP32","ESP32","Wire by Wire"),
 ("Home Assistant",'"Home Assistant"',"Control Room"),
 ("OpenSCAD","OpenSCAD","Case in Point"),
 ("Jetson","Jetson","Model Ready"),
 ("Raspberry Pi",'"Raspberry Pi"',"The Media Shelf"),
 ("NFC","NFC","Tap Twice"),
 ("Jellyfin","Jellyfin","The Media Shelf"),
 ("Electronics","electronics","Wire by Wire")]
FUNDED=re.compile(r"\b(bounty|budget|paid\s+(?:gig|task|work|project|contract)|reward|compensation|commission|hiring|looking\s+to\s+hire|will\s+pay|can\s+pay|funded|\$\s?\d{2,})\b",re.I)
SKIP=re.compile(r"(self[- ]?promo|test[- ]?bounty|honeypot|spam farm|this is not a bounty|not paid|no budget)",re.I)

def search(query):
    url="https://api.github.com/search/issues?"+urllib.parse.urlencode({"q":query,"sort":"updated","order":"desc","per_page":20})
    headers={"User-Agent":"one-off-office-lead-finder","Accept":"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28"}
    if os.getenv("GH_TOKEN"): headers["Authorization"]="Bearer "+os.environ["GH_TOKEN"]
    with urllib.request.urlopen(urllib.request.Request(url,headers=headers),timeout=18) as r:
        return json.load(r).get("items",[])

def scan():
    found={}
    errors=[]
    for topic,term,offer in TOPICS:
        q=f'{term} bounty in:title,body is:issue is:open updated:>={SINCE}'
        try: entries=search(q)
        except (urllib.error.URLError,TimeoutError,ValueError) as exc:
            errors.append(topic+": "+type(exc).__name__)
            continue
        for item in entries:
            if item.get("pull_request") or item.get("state")!="open" or item.get("assignee"): continue
            title=(item.get("title") or "").strip()
            body=(item.get("body") or "")[:3500]
            text=title+" "+body
            if not FUNDED.search(text) or SKIP.search(text): continue
            if not ("bounty" in title.lower() or re.search(r"\b(bounty|will pay|budget|funded)\b",body,re.I)): continue
            repo=(item.get("repository_url") or "").split("/repos/")[-1]
            if repo.startswith(("alfrexo95/bounty-bot","relayhop/sn-monetization-runtime","limitlessprojects/Go-Hybrid")): continue
            match=re.search(r"(?:AUD|USD|US\$|A\$|\$)\s?([1-9]\d{1,5})(?!\d)",text,re.I)
            amount=int(match.group(1)) if match else None
            age=max(0,(NOW-dt.datetime.fromisoformat(item["updated_at"].replace("Z","+00:00"))).days)
            score=2+(3 if amount else 0)+(2 if age<=7 else 0)+(2 if "bounty" in title.lower() else 0)
            found[item["html_url"]]={"url":item["html_url"],"title":title[:180],"repo":repo,"service":offer,"topic":topic,"amount_unverified":amount,"updated_at":item["updated_at"],"score":score}
        time.sleep(.2)
    return found,errors

def main():
    try: previous=json.loads(STATE.read_text(encoding="utf-8"))
    except (OSError,ValueError): previous=[]
    old={x["url"]:x for x in previous}
    incoming,errors=scan()
    merged={**old,**incoming}
    merged=dict(sorted(merged.items(),key=lambda kv:kv[1]["updated_at"],reverse=True)[:160])
    new_count=len(set(merged)-set(old))
    if new_count or not BOARD.exists():
        rows=list(merged.values())
        STATE.write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
        lines=[
          "# Potential paid projects — verify before pursuing","","Public opportunities matching existing services at [The One-Off Office](https://the-one-off-office.vercel.app/).",
          "No listing, bounty amount or payout is guaranteed; verify it with the actual payer before starting work.","",
          f"Unique open-issue leads saved: **{len(rows)}**. Newly discovered this run: **{new_count}**.","",
          "| Suitable service | Public request | Potential payout (unverified) | Updated UTC |",
          "|---|---|---|---|"]
        for item in sorted(rows,key=lambda x:x["score"],reverse=True)[:60]:
            title=item["title"].replace("|","/").replace("[","(").replace("]",")")
            payout="Possible $"+str(item["amount_unverified"])+"; verify" if item["amount_unverified"] else "Bounty mentioned; amount unknown"
            lines.append(f"| {item['service']} | [{title}]({item['url']}) | {payout} | {item['updated_at'][:10]} |")
        if not rows: lines.append("| — | No recent on-topic opportunities passed filters | — | — |")
        lines+=["","## Required next action","",
            "Check current status and funded payment terms on the source issue. Prepare a narrowly scoped quote tied to its acceptance criteria. Ask the owner before any external outreach. No emails, bids or public comments are sent by this workflow.",""]
        if errors: lines+=["Partial source errors: "+", ".join(errors),""]
        BOARD.write_text("\n".join(lines)+"\n",encoding="utf-8")
    print(json.dumps({"topics_scanned":len(TOPICS),"matching_now":len(incoming),"new_leads":new_count,"total_saved":len(merged),"source_errors":errors}))
    if len(errors)==len(TOPICS): raise SystemExit("All searches failed")

if __name__=="__main__": main()
