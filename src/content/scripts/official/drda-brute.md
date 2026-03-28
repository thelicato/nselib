---
title: "drda-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs password guessing against databases supporting the IBM DB2 protocol such as Informix, DB2 and Derby"
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 50000 --script drda-brute <target>"
outputPreview:
  - "50000/tcp open  drda"
  - "| drda-brute:"
  - "|_  db2admin:db2admin => Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/drda-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/drda-brute.html"
---

Performs password guessing against databases supporting the IBM DB2 protocol such as Informix, DB2 and Derby
