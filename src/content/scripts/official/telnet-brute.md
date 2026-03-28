---
title: "telnet-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute-force password auditing against telnet servers."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 23 --script telnet-brute --script-args userdb=myusers.lst,passdb=mypwds.lst,telnet-brute.timeout=8s <target>"
outputPreview:
  - "23/tcp open  telnet"
  - "| telnet-brute:"
  - "|   Accounts"
  - "|     wkurtz:colonel"
  - "|   Statistics"
  - "|_    Performed 15 guesses in 19 seconds, average tps: 0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/telnet-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/telnet-brute.html"
---

Performs brute-force password auditing against telnet servers.
