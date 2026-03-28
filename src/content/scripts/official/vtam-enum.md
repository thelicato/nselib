---
title: "vtam-enum"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Many mainframes use VTAM screens to connect to various applications\n(CICS, IMS, TSO, and many more)."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script vtam-enum -p 23 <targets>\n\nnmap --script vtam-enum --script-args idlist=defaults.txt,\nvtam-enum.command=\"exit;logon applid(logos)\",vtam-enum.macros=true\nvtam-enum.path=\"/home/dade/screenshots/\" -p 23 -sV <targets>"
outputPreview:
  - "PORT   STATE SERVICE VERSION"
  - "23/tcp open  tn3270  IBM Telnet TN3270"
  - "| vtam-enum:"
  - "|   VTAM Application ID:"
  - "|     applid:TSO - Valid credentials"
  - "|     applid:CICSTS51 - Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/vtam-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/vtam-enum.html"
---

Many mainframes use VTAM screens to connect to various applications
(CICS, IMS, TSO, and many more).
This script attempts to brute force those VTAM application IDs.
This script is based on mainframe_brute by Dominic White
( https://github.com/sensepost/mainframe_brute ). However, this script
doesn't rely on any third party libraries or tools and instead uses
the NSE TN3270 library which emulates a TN3270 screen in lua.
Application IDs only allows for 8 byte IDs, that is the only specific rule
found for application IDs.
