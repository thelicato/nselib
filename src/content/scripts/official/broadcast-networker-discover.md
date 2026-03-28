---
title: "broadcast-networker-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers EMC Networker backup software servers on a LAN by sending a network broadcast query."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-networker-discover"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-networker-discover:"
  - "|_  10.20.30.40"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-networker-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-networker-discover.html"
---

Discovers EMC Networker backup software servers on a LAN by sending a network broadcast query.
