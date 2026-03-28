---
title: "rexec-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Performs brute force password auditing against the classic UNIX rexec (remote exec) service."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 512 --script rexec-brute <ip>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "512/tcp open  exec"
  - "| rexec-brute:"
  - "|   Accounts"
  - "|     nmap:test - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rexec-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rexec-brute.html"
---

Performs brute force password auditing against the classic UNIX rexec (remote exec) service.
