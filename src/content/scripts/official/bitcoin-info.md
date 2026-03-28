---
title: "bitcoin-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Extracts version and node information from a Bitcoin server"
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8333 --script bitcoin-info <ip>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8333/tcp open  bitcoin"
  - "| bitcoin-info:"
  - "|   Timestamp: 2018-03-09T06:25:49"
  - "|   Network: main"
  - "|   Version: 0.7.0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/bitcoin-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/bitcoin-info.html"
---

Extracts version and node information from a Bitcoin server
