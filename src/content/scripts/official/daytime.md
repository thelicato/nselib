---
title: "daytime"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves the day and time from the Daytime service."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=daytime <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "13/tcp open  daytime"
  - "|_daytime: Wed Mar 31 14:48:58 MDT 2010"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/daytime.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/daytime.html"
---

Retrieves the day and time from the Daytime service.
