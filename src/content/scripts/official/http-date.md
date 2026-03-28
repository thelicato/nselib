---
title: "http-date"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Gets the date from HTTP-like services. Also prints how much the date\ndiffers from local time. Local time is the time the HTTP request was\nsent, so the difference includes at least the duration of one RTT."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=http-date <target>"
outputPreview:
  - "80/tcp open  http"
  - "|_http-date: Thu, 02 Aug 2012 22:11:03 GMT; 0s from local time."
  - "80/tcp open  http"
  - "|_http-date: Thu, 02 Aug 2012 22:07:12 GMT; -3m51s from local time."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-date.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-date.html"
---

Gets the date from HTTP-like services. Also prints how much the date
differs from local time. Local time is the time the HTTP request was
sent, so the difference includes at least the duration of one RTT.
