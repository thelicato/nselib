---
title: "broadcast-wake-on-lan"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Wakes a remote system up from sleep by sending a Wake-On-Lan packet."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-wake-on-lan --script-args broadcast-wake-on-lan.MAC='00:12:34:56:78:9A'"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-wake-on-lan:"
  - "|_  Sent WOL packet to: 10:9a:dd:a8:40:24"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-wake-on-lan.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-wake-on-lan.html"
---

Wakes a remote system up from sleep by sending a Wake-On-Lan packet.
