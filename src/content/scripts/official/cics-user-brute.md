---
title: "cics-user-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "CICS User ID brute forcing script for the CESL login screen."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=cics-user-brute -p 23 <targets>\n\nnmap --script=cics-user-brute --script-args userdb=users.txt,\ncics-user-brute.commands=\"exit;logon applid(cics42)\" -p 23 <targets>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "23/tcp open  tn3270"
  - "| cics-user-brute:"
  - "|   Accounts:"
  - "|     PLAGUE: Valid - CICS User ID"
  - "|_  Statistics: Performed 31 guesses in 114 seconds, average tps: 0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/cics-user-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/cics-user-brute.html"
---

CICS User ID brute forcing script for the CESL login screen.
