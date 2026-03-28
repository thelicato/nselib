---
title: "afp-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs password guessing against Apple Filing Protocol (AFP)."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 548 --script afp-brute <host>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "548/tcp open  afp"
  - "| afp-brute:"
  - "|_  admin:KenSentMe => Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/afp-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/afp-brute.html"
---

Performs password guessing against Apple Filing Protocol (AFP).
