---
title: "http-title"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Shows the title of the default page of a web server."
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
  - "Nmap scan report for scanme.nmap.org (74.207.244.221)"
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "|_http-title: Go ahead and ScanMe!"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-title.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-title.html"
---

Shows the title of the default page of a web server.
The script will follow up to 5 HTTP redirects, using the default rules in the
http library.
