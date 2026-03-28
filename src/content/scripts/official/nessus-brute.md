---
title: "nessus-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against a Nessus vulnerability scanning daemon using the NTP 1.2 protocol."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script nessus-brute -p 1241 <host>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "1241/tcp open  nessus"
  - "| nessus-brute:"
  - "|   Accounts"
  - "|     nessus:nessus - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nessus-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nessus-brute.html"
---

Performs brute force password auditing against a Nessus vulnerability scanning daemon using the NTP 1.2 protocol.
