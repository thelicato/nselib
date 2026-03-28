---
title: "bitcoin-getaddr"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Queries a Bitcoin server for a list of known Bitcoin nodes"
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8333 --script bitcoin-getaddr <ip>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8333/tcp open  unknown"
  - "| bitcoin-getaddr:"
  - "|   ip                    timestamp"
  - "|   10.10.10.10:8333      11/09/11 17:38:00"
  - "|   10.10.10.11:8333      11/09/11 17:42:39"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/bitcoin-getaddr.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/bitcoin-getaddr.html"
---

Queries a Bitcoin server for a list of known Bitcoin nodes
