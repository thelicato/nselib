---
title: "broadcast-pc-anywhere"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Sends a special broadcast probe to discover PC-Anywhere hosts running on a LAN."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-pc-anywhere"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-pc-anywhere:"
  - "|_  10.0.200.113 - WIN2K3SRV-1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-pc-anywhere.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-pc-anywhere.html"
---

Sends a special broadcast probe to discover PC-Anywhere hosts running on a LAN.
