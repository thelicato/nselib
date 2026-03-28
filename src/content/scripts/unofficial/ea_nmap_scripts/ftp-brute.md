---
title: "ftp-brute"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against FTP servers."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script ftp-brute -p 21 <host>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "21/tcp open  ftp"
  - "| my-ftp-brute:"
  - "|   Accounts"
  - "|     root:root - Valid credentials"
  - "|   Statistics"
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/ftp-brute.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Performs brute force password auditing against FTP servers.
Based on old ftp-brute.nse script by Diman Todorov, Vlatko Kosturjak and Ron Bowes.
