---
title: "vnc-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against VNC servers."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script vnc-brute -p 5900 <host>"
outputPreview:
  - "PORT     STATE  SERVICE REASON"
  - "5900/tcp open   vnc     syn-ack"
  - "| vnc-brute:"
  - "|   Accounts"
  - "|_    123456 => Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/vnc-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/vnc-brute.html"
---

Performs brute force password auditing against VNC servers.
