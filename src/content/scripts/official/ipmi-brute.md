---
title: "ipmi-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against IPMI RPC server."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU --script ipmi-brute -p 623 <host>"
outputPreview:
  - "PORT     STATE  SERVICE REASON"
  - "623/udp  open|filtered  unknown"
  - "| ipmi-brute:"
  - "|   Accounts"
  - "|_    admin:admin => Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ipmi-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ipmi-brute.html"
---

Performs brute force password auditing against IPMI RPC server.
