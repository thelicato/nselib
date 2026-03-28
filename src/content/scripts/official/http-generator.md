---
title: "http-generator"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Displays the contents of the \"generator\" meta tag of a web page (default: /)\nif there is one."
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
usage: "nmap --script http-generator [--script-args http-generator.path=<path>,http-generator.redirects=<number>,...] <host>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "80/tcp  open  http"
  - "|_http-generator: TYPO3 4.2 CMS"
  - "443/tcp open  https"
  - "|_http-generator: TYPO3 4.2 CMS"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-generator.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-generator.html"
---

Displays the contents of the "generator" meta tag of a web page (default: /)
if there is one.
