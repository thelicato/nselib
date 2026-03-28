---
title: "ftp-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against FTP servers."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script ftp-brute -p 21 <host>\n\nThis script uses brute library to perform password\nguessing."
outputPreview:
  - "PORT   STATE SERVICE"
  - "21/tcp open  ftp"
  - "| ftp-brute:"
  - "|   Accounts"
  - "|     root:root - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ftp-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ftp-brute.html"
---

Performs brute force password auditing against FTP servers.
Based on old ftp-brute.nse script by Diman Todorov, Vlatko Kosturjak and Ron Bowes.
