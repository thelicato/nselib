---
title: "rfc868-time"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Retrieves the day and time from the Time service."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "37/tcp open  time"
  - "|_rfc868-time: 2013-10-23T10:33:00"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rfc868-time.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rfc868-time.html"
---

Retrieves the day and time from the Time service.
