---
title: "file-checker"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Author: r00t-3xp10it\nNSE script to check/read contents of the selected file/path in target webserver.\nThis module will search if 'index' exists, and if used --script-args read=true\nthen file-checker.nse script will read/display the contents of the 'index' file."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "deadjakk/unofficial-nse-repo"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script-help file-checker.nse\nnmap -sS -Pn -p 80 --open --script file-checker.nse <target or domain>\nnmap -sS -Pn -p 80 --open --script file-checker.nse --script-args \"index=/etc/passwd\" <target or domain>\nnmap -sS -Pn -p 80 --open --script file-checker.nse --script-args \"command=/bin/sh -i\" <target or domain>\nnmap -sS -Pn -p 80 --open --script file-checker.nse --script-args \"index=/robots.txt,read=true\" <target or domain>\nnmap -sS -Pn -p 80 --open --script file-checker.nse --script-args \"agent=Mozilla/5.0 (compatible; EvilMonkey)\" <target or domain>\nnmap -sS -Pn -p 80 --open --script file-checker.nse --script-args \"index=/index.html,read=true\" --spoof-mac Apple <target or domain>\nnmap -sV -Pn -T4 -iR 400 -p 80 --open --reason --script file-checker.nse --script-args \"index=/etc/passwd,read=true\" -oN creds.log\nnmap -sI -Pn -p 80 --scan-delay 8 --script file-checker.nse --script-args \"index=/robots.txt,read=true\" <zombie>,<target or domain>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| file-checker:"
  - "|   index: /robots.txt"
  - "|   STATUS: 200 OK FOUND"
  - "|     module author: r00t-3xp10it"
author: "r00t-3xp10it"
reference:
  label: "View Mirror Script Source"
  url: "https://github.com/deadjakk/Unofficial-NSE-Repo/blob/main/scripts/r00t3expl0it_nse/file-checker.nse"
---

Imported from the community mirror repository [deadjakk/Unofficial-NSE-Repo](https://github.com/deadjakk/Unofficial-NSE-Repo) because no upstream `FROM.md` reference was available for this folder.
Author: r00t-3xp10it
NSE script to check/read contents of the selected file/path in target webserver.
This module will search if 'index' exists, and if used --script-args read=true
then file-checker.nse script will read/display the contents of the 'index' file.
This script also gives you the ability to search for a diferent 'index' (files or directory)
using --script-args index=/file-to-search or index=/directory-to-search, or set a diferent
User-agent to send in the ofending tcp packet --script-args agent=<User-agent>
'Default behavior its to search for robots.txt file in webserver'
This script also gives to is users the ability to use the lost '--interactive' nmap
switch, that allow us to interact with the bash shell inside of nmap funtions using:
nmap -sV -Pn -p 80 --script file-checker.nse --script-args "command=/bin/sh -i" <target>
'WARNING: The 'command' argument does not work together with other script arguments'
Some Syntax examples:
nmap -sS -Pn -p 80 --open --script file-checker.nse <target or domain>
nmap -sS -Pn -p 80 --open --script file-checker.nse --script-args "index=/etc/passwd" <target or domain>
nmap -sS -Pn -p 80 --open --script file-checker.nse --script-args "command=/bin/sh -i" <target or domain>
nmap -sS -Pn -p 80 --open --script file-checker.nse --script-args "index=/robots.txt,read=true" <target or domain>
nmap -sS -Pn -p 80 --open --script file-checker.nse --script-args "agent=Mozilla/5.0 (compatible; EvilMonkey)" <target or domain>
nmap -sS -Pn -p 80 --open --script file-checker.nse --script-args "index=/index.html,read=true" --spoof-mac Apple <target or domain>
nmap -sV -Pn -T4 -iR 400 -p 80 --open --reason --script file-checker.nse --script-args "index=/etc/passwd,read=true" -oN creds.log
nmap -sI -Pn -p 80 --scan-delay 8 --script file-checker.nse --script-args "index=/robots.txt,read=true" <zombie>,<target or domain>
