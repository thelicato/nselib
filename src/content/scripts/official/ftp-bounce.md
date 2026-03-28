---
title: "ftp-bounce"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Checks to see if an FTP server allows port scanning using the FTP bounce method."
risk: safe
tags:
  - "default"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "21/tcp open  ftp"
  - "|_ftp-bounce: bounce working!"
  - "PORT   STATE SERVICE"
  - "21/tcp open  ftp"
  - "|_ftp-bounce: server forbids bouncing to low ports <1025"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ftp-bounce.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ftp-bounce.html"
---

Checks to see if an FTP server allows port scanning using the FTP bounce method.
