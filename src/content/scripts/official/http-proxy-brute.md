---
title: "http-proxy-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
  - "external"
shortDescription: "Performs brute force password guessing against HTTP proxy servers."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "external"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-proxy-brute -p 8080 <host>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8080/tcp open  http-proxy"
  - "| http-proxy-brute:"
  - "|   Accounts"
  - "|     patrik:12345 - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-proxy-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-proxy-brute.html"
---

Performs brute force password guessing against HTTP proxy servers.
