---
title: "metasploit-msgrpc-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force username and password auditing against\nMetasploit msgrpc interface."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script metasploit-msgrpc-brute -p 55553 <host>\n\nThis script uses brute library to perform password\nguessing against Metasploit's msgrpc interface."
outputPreview:
  - "PORT      STATE SERVICE REASON"
  - "55553/tcp open  unknown syn-ack"
  - "| metasploit-msgrpc-brute:"
  - "|   Accounts"
  - "|     root:root - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/metasploit-msgrpc-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/metasploit-msgrpc-brute.html"
---

Performs brute force username and password auditing against
Metasploit msgrpc interface.
