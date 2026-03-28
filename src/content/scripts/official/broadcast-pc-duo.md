---
title: "broadcast-pc-duo"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers PC-DUO remote control hosts and gateways running on a LAN by sending a special broadcast UDP probe."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-pc-duo"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-pc-duo:"
  - "|   PC-Duo Gateway Server"
  - "|     10.0.200.113 - WIN2K3SRV-1"
  - "|   PC-Duo Hosts"
  - "|_    10.0.200.113 - WIN2K3SRV-1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-pc-duo.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-pc-duo.html"
---

Discovers PC-DUO remote control hosts and gateways running on a LAN by sending a special broadcast UDP probe.
