---
title: "rpcap-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against the WinPcap Remote Capture\nDaemon (rpcap)."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 2002 <ip> --script rpcap-brute"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "2002/tcp open  globe   syn-ack"
  - "| rpcap-brute:"
  - "|   Accounts"
  - "|     monkey:Password1 - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rpcap-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rpcap-brute.html"
---

Performs brute force password auditing against the WinPcap Remote Capture
Daemon (rpcap).
