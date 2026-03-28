---
title: "domcon-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against the Lotus Domino Console."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script domcon-brute -p 2050 <host>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "2050/tcp open  unknown syn-ack"
  - "| domcon-brute:"
  - "|   Accounts"
  - "|_    patrik karlsson:secret => Login correct"
  - "Summary"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/domcon-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/domcon-brute.html"
---

Performs brute force password auditing against the Lotus Domino Console.
