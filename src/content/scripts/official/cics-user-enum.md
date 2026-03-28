---
title: "cics-user-enum"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "CICS User ID enumeration script for the CESL/CESN Login screen."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=cics-user-enum -p 23 <targets>\n\nnmap --script=cics-user-enum --script-args userdb=users.txt,\ncics-user-enum.commands=\"exit;logon applid(cics42)\" -p 23 <targets>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "23/tcp open  tn3270"
  - "| cics-user-enum:"
  - "|   Accounts:"
  - "|     PLAGUE: Valid - CICS User ID"
  - "|_  Statistics: Performed 31 guesses in 114 seconds, average tps: 0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/cics-user-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/cics-user-enum.html"
---

CICS User ID enumeration script for the CESL/CESN Login screen.
