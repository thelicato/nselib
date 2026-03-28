---
title: "socks-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against SOCKS 5 proxy servers."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script socks-brute -p 1080 <host>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "1080/tcp open  socks"
  - "| socks-brute:"
  - "|   Accounts"
  - "|     patrik:12345 - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/socks-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/socks-brute.html"
---

Performs brute force password auditing against SOCKS 5 proxy servers.
