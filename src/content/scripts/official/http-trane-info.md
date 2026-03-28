---
title: "http-trane-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "version"
  - "safe"
shortDescription: "Attempts to obtain information from Trane Tracer SC devices. Trane Tracer SC\n is an intelligent field panel for communicating with HVAC equipment controllers\n deployed across several sectors including commercial facilities and others."
risk: safe
tags:
  - "discovery"
  - "version"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script trane-info.nse <target>"
outputPreview:
  - "| http-trane-info:"
  - "|   serverName: XXXXX"
  - "|   serverTime: 2017-09-24T01:03:08-05:00"
  - "|   serverBootTime: 2017-08-03T02:06:39-05:00"
  - "|   vendorName: Trane"
  - "|   productName: Tracer SC"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-trane-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-trane-info.html"
---

Attempts to obtain information from Trane Tracer SC devices. Trane Tracer SC
 is an intelligent field panel for communicating with HVAC equipment controllers
 deployed across several sectors including commercial facilities and others.
The information is obtained from the web server that exposes sensitive content to
 unauthenticated users.
Tested on Trane Tracer SC version 4.40.1211 and below.
