---
title: "tso-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "TSO account brute forcer."
risk: intrusive
tags:
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 2401 --script tso-brute <host>"
outputPreview:
  - "23/tcp open  tn3270  syn-ack IBM Telnet TN3270"
  - "| tso-brute:"
  - "|   Node Name:"
  - "|     IBMUSER:<skipped> - User logged on. Skipped."
  - "|     ZERO:<skipped> - User logged on. Skipped."
  - "|     COOL:secret - Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/tso-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/tso-brute.html"
---

TSO account brute forcer.
This script relies on the NSE TN3270 library which emulates a
TN3270 screen for NMAP.
TSO user IDs have the following rules:
 - it cannot begin with a number
 - only contains alpha-numeric characters and @, #, $.
 - it cannot be longer than 7 chars
