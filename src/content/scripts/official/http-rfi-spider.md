---
title: "http-rfi-spider"
source: official
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "Crawls webservers in search of RFI (remote file inclusion) vulnerabilities. It\ntests every form field it finds and every parameter of a URL containing a\nquery."
risk: intrusive
tags:
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-rfi-spider -p80 <host>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http"
  - "| http-rfi-spider:"
  - "|   Possible RFI in form fields"
  - "|     Form \"(form 1)\" at /experiments/rfihome.html (action rfi.pl) with fields:"
  - "|       inc"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-rfi-spider.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-rfi-spider.html"
---

Crawls webservers in search of RFI (remote file inclusion) vulnerabilities. It
tests every form field it finds and every parameter of a URL containing a
query.
