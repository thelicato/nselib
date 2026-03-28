---
title: "lu-enum"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Attempts to enumerate Logical Units (LU) of TN3270E servers."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script lu-enum -p 23 <targets>"
outputPreview:
  - "PORT     STATE SERVICE REASON  VERSION"
  - "23/tcp   open  tn3270  syn-ack IBM Telnet TN3270 (TN3270E)"
  - "| lu-enum:"
  - "|   Logical Units:"
  - "|     LU:BSLVLU69 - Valid credentials"
  - "|_  Statistics: Performed 7 guesses in 7 seconds, average tps: 1.0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/lu-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/lu-enum.html"
---

Attempts to enumerate Logical Units (LU) of TN3270E servers.
When connecting to a TN3270E server you are assigned a Logical Unit (LU) or you can tell
the TN3270E server which LU you'd like to use. Typically TN3270E servers are configured to
give you an LU from a pool of LUs. They can also have LUs set to take you to a specific
application. This script attempts to guess valid LUs that bypass the default LUs you are
assigned. For example, if a TN3270E server sends you straight to TPX you could use this
script to find LUs that take you to TSO, CICS, etc.
