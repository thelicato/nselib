---
title: "redis-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves information (such as version number and architecture) from a Redis key-value store."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 6379 <ip> --script redis-info"
outputPreview:
  - "PORT     STATE SERVICE"
  - "6379/tcp open  unknown"
  - "| redis-info:"
  - "|   Version            2.2.11"
  - "|   Architecture       64 bits"
  - "|   Process ID         17821"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/redis-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/redis-info.html"
---

Retrieves information (such as version number and architecture) from a Redis key-value store.
