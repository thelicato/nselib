---
title: "finger"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to retrieve a list of usernames using the finger service."
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
  - "PORT   STATE SERVICE"
  - "79/tcp open  finger"
  - "| finger:"
  - "| Welcome to Linux version 2.6.31.12-0.2-default at linux-pb94.site !"
  - "|  01:14am  up  18:54,  4 users,  load average: 0.14, 0.08, 0.01"
  - "|"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/finger.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/finger.html"
---

Attempts to retrieve a list of usernames using the finger service.
