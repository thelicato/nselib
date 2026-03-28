---
title: "http-backup-finder"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Spiders a website and attempts to identify backup copies of discovered files.\nIt does so by requesting a number of different combinations of the filename (eg. index.bak, index.html~, copy of index.html)."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-backup-finder <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-backup-finder:"
  - "| Spidering limited to: maxdepth=3; maxpagecount=20; withindomain=example.com"
  - "|   http://example.com/index.bak"
  - "|   http://example.com/login.php~"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-backup-finder.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-backup-finder.html"
---

Spiders a website and attempts to identify backup copies of discovered files.
It does so by requesting a number of different combinations of the filename (eg. index.bak, index.html~, copy of index.html).
