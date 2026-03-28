---
title: "nping-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against an Nping Echo service."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 9929 --script nping-brute <target>"
outputPreview:
  - "9929/tcp open  nping-echo"
  - "| nping-brute:"
  - "|   Accounts"
  - "|     123abc => Valid credentials"
  - "|   Statistics"
  - "|_    Perfomed 204 guesses in 204 seconds, average tps: 1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nping-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nping-brute.html"
---

Performs brute force password auditing against an Nping Echo service.
See https://nmap.org/book/nping-man-echo-mode.html for Echo Mode
documentation.
