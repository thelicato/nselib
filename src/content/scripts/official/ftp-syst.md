---
title: "ftp-syst"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Sends FTP SYST and STAT commands and returns the result."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "| ftp-syst:"
  - "|   SYST: UNIX MikroTik 6.34.3"
  - "|   STAT:"
  - "|  Enver Curri FTP server (MikroTik 6.34.3) status:"
  - "| Logged in as"
  - "| TYPE: ASCII; STRUcture: File; transfer MODE: Stream"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ftp-syst.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ftp-syst.html"
---

Sends FTP SYST and STAT commands and returns the result.
The canonical SYST response of "UNIX Type: L8" is stripped or ignored, since it
is meaningless. Typical FTP response codes (215 for SYST and 211 for STAT) are
also hidden.
