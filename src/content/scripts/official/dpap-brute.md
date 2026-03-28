---
title: "dpap-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against an iPhoto Library."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script dpap-brute -p 8770 <host>"
outputPreview:
  - "8770/tcp open  apple-iphoto syn-ack"
  - "| dpap-brute:"
  - "|   Accounts"
  - "|     secret => Login correct"
  - "|   Statistics"
  - "|_    Perfomed 5007 guesses in 6 seconds, average tps: 834"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dpap-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dpap-brute.html"
---

Performs brute force password auditing against an iPhoto Library.
