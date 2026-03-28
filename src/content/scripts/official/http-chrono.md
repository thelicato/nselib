---
title: "http-chrono"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Measures the time a website takes to deliver a web page and returns\nthe maximum, minimum and average time it took to fetch a page."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-chrono <ip>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "|_http-chrono: Request times for /; avg: 2.98ms; min: 2.63ms; max: 3.62ms"
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-chrono:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-chrono.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-chrono.html"
---

Measures the time a website takes to deliver a web page and returns
the maximum, minimum and average time it took to fetch a page.
Web pages that take longer time to load could be abused by attackers in DoS or
DDoS attacks due to the fact that they are likely to consume more resources on
the target server. This script could help identifying these web pages.
