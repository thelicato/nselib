---
title: "AXISwebcam-recon"
source: unofficial
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Module Author: r00t-3xp10it & Cleiton Pinheiro\nNSE script to detect if target [ip]:[port][/url] its an AXIS Network Camera transmiting (live).\nThis script also allow is users to send a fake User-Agent in the tcp packet <agent=User-Agent-String>\nand also allow is users to input a diferent uri= [/url] link to be scan, IF none uri= value its inputed, then\nthis script tests a List of AXIS default [/url's] available in our database to brute force the HTML TITLE tag.\n'Remark: This nse script will NOT execute againts webcams found that require authentication logins'"
risk: safe
tags:
  - "safe"
  - "discovery"
  - "deadjakk/unofficial-nse-repo"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script-help AXISwebcam-recon.nse\nnmap -sV -Pn -p 80-86,92,8080-8082 --open --script AXISwebcam-recon.nse 216.99.115.136\nnmap -sV -Pn -p 80-86,92,8080-8082 --open --script AXISwebcam-recon.nse --script-args \"uri=/view/viewer_index.shtml\" 217.78.137.43\nnmap -sS -Pn -p 80-86,92,8080-8082 --script AXISwebcam-recon.nse --script-args \"agent=Mozilla/5.0 (compatible; EvilMonkey)\" 50.93.227.204\nnmap -sS -Pn -p 80-86,92,8080-8082 --open --script AXISwebcam-recon.nse --script-args \"agent=Mozilla/5.0 (compatible),uri=/\" 194.150.15.187"
outputPreview:
  - "PORT     STATE SERVICE VERSION"
  - "8080/tcp open  http    Boa httpd"
  - "| AXISwebcam-recon:"
  - "|   STATUS: AXIS WEBCAM FOUND"
  - "|     TITLE: Live view  - AXIS 211 Network Camera version 4.11"
  - "|       WEBCAM ACCESS: http://216.99.115.136:8080/view/index.shtml"
author: "r00t-3xp10it & Cleiton Pinheiro"
reference:
  label: "View Mirror Script Source"
  url: "https://github.com/deadjakk/Unofficial-NSE-Repo/blob/main/scripts/r00t3expl0it_nse/AXISwebcam-recon.nse"
---

Imported from the community mirror repository [deadjakk/Unofficial-NSE-Repo](https://github.com/deadjakk/Unofficial-NSE-Repo) because no upstream `FROM.md` reference was available for this folder.
Module Author: r00t-3xp10it & Cleiton Pinheiro
NSE script to detect if target [ip]:[port][/url] its an AXIS Network Camera transmiting (live).
This script also allow is users to send a fake User-Agent in the tcp packet <agent=User-Agent-String>
and also allow is users to input a diferent uri= [/url] link to be scan, IF none uri= value its inputed, then
this script tests a List of AXIS default [/url's] available in our database to brute force the HTML TITLE tag.
'Remark: This nse script will NOT execute againts webcams found that require authentication logins'
Some Syntax examples:
nmap --script-help AXISwebcam-recon.nse
nmap -sV -Pn -p 80-86,92,8001,8080-8086,50090,55752-55754 --open --script AXISwebcam-recon.nse 216.99.115.136
nmap -sV -Pn -p 80-86,92,8080-8086 --open --script AXISwebcam-recon.nse --script-args "uri=/view/viewer_index.shtml" 217.78.137.43
nmap -sS -Pn -p 80-86,92,8080-8086 --script AXISwebcam-recon.nse --script-args "agent=Mozilla/5.0 (compatible; EvilMonkey)" 50.93.227.204
nmap -sS -Pn -p 80,8080-8086 --open --script AXISwebcam-recon.nse --script-args "agent=Mozilla/5.0 (compatible),uri=/fd" 194.150.15.187
nmap -sS -v -Pn -n -T5 -iR 700 -p 80-86,92,8001,8080-8086,55752-55758 --open --script=http-headers.nse,AXISwebcam-recon.nse -D 65.49.82.3
