---
title: "http-ls"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Shows the content of an \"index\" Web page."
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
usage: "nmap -n -p 80 --script http-ls test-debit.free.fr"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-ls:"
  - "| Volume /"
  - "| maxfiles limit reached (10)"
  - "| SIZE        TIME               FILENAME"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-ls.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-ls.html"
---

Shows the content of an "index" Web page.
TODO:
 - add support for more page formats
