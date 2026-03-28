---
title: "informix-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against IBM Informix Dynamic Server."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script informix-brute -p 9088 <host>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "9088/tcp open  unknown"
  - "| informix-brute:"
  - "|   Accounts"
  - "|     ifxnoob:ifxnoob => Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/informix-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/informix-brute.html"
---

Performs brute force password auditing against IBM Informix Dynamic Server.
