---
title: "cics-enum"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "CICS transaction ID enumerator for IBM mainframes.\nThis script is based on mainframe_brute by Dominic White\n( https://github.com/sensepost/mainframe_brute ). However, this script\ndoesn't rely on any third party libraries or tools and instead uses\nthe NSE TN3270 library which emulates a TN3270 screen in lua."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=cics-enum -p 23 <targets>\n\nnmap --script=cics-enum --script-args=idlist=default_cics.txt,\ncics-enum.command=\"exit;logon applid(cics42)\",\ncics-enum.path=\"/home/dade/screenshots/\",cics-enum.noSSL=true -p 23 <targets>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "23/tcp open  tn3270"
  - "| cics-enum:"
  - "|   Accounts:"
  - "|     CBAM: Valid - CICS Transaction ID"
  - "|     CETR: Valid - CICS Transaction ID"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/cics-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/cics-enum.html"
---

CICS transaction ID enumerator for IBM mainframes.
This script is based on mainframe_brute by Dominic White
( https://github.com/sensepost/mainframe_brute ). However, this script
doesn't rely on any third party libraries or tools and instead uses
the NSE TN3270 library which emulates a TN3270 screen in lua.
CICS only allows for 4 byte transaction IDs, that is the only specific rule
found for CICS transaction IDs.
