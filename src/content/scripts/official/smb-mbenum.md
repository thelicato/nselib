---
title: "smb-mbenum"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Queries information managed by the Windows Master Browser."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -p 445 <host> --script smb-mbenum"
outputPreview:
  - "| smb-mbenum:"
  - "|   Backup Browser"
  - "|     WIN2K3-EPI-1  5.2  EPiServer 2003 frontend server"
  - "|   DFS Root"
  - "|     WIN2K3-1      5.2  MSSQL Server backend"
  - "|     WIN2K3-EPI-1  5.2  EPiServer 2003 frontend server"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-mbenum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-mbenum.html"
---

Queries information managed by the Windows Master Browser.
