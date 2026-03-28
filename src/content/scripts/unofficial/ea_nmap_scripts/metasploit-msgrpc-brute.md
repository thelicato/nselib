---
title: "metasploit-msgrpc-brute"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force username and password guessing against\nMetasploit msgrpc interface."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script metasploit-msgrpc-brute -p 55553 <host>"
outputPreview:
  - "PORT      STATE SERVICE REASON"
  - "55553/tcp open  unknown syn-ack"
  - "| metasploit-msgrpc-brute:"
  - "|   Accounts"
  - "|     root:root - Valid credentials"
  - "|   Statistics"
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/metasploit-msgrpc-brute.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Performs brute force username and password guessing against
Metasploit msgrpc interface.
