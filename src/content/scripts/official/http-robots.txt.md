---
title: "http-robots.txt"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Checks for disallowed entries in /robots.txt on a web server."
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
  - "80/tcp  open   http    syn-ack"
  - "|  http-robots.txt: 156 disallowed entries (40 shown)"
  - "|  /news?output=xhtml& /search /groups /images /catalogs"
  - "|  /catalogues /news /nwshp /news?btcid=*& /news?btaid=*&"
  - "|  /setnewsprefs? /index.html? /? /addurl/image? /pagead/ /relpage/"
  - "|  /relcontent /sorry/ /imgres /keyword/ /u/ /univ/ /cobrand /custom"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-robots.txt.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-robots.txt.html"
---

Checks for disallowed entries in /robots.txt on a web server.
The higher the verbosity or debug level, the more disallowed entries are shown.
