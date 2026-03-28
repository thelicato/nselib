---
title: "domcon-cmd"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "auth"
shortDescription: "Runs a console command on the Lotus Domino Console using the given authentication credentials (see also: domcon-brute)"
risk: intrusive
tags:
  - "intrusive"
  - "auth"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 2050 <host> --script domcon-cmd --script-args domcon-cmd.cmd=\"show server\", \\\n  domcon-cmd.user=\"Patrik Karlsson\",domcon-cmd.pass=\"secret\""
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "2050/tcp open  unknown syn-ack"
  - "| domcon-cmd:"
  - "|   show server"
  - "|"
  - "|     Lotus Domino (r) Server (Release 8.5 for Windows/32) 2010-07-30 00:52:58"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/domcon-cmd.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/domcon-cmd.html"
---

Runs a console command on the Lotus Domino Console using the given authentication credentials (see also: domcon-brute)
