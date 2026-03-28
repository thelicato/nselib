---
title: "broadcast-sybase-asa-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers Sybase Anywhere servers on the LAN by sending broadcast discovery messages."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-sybase-asa-discover"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-sybase-asa-discover:"
  - "|   ip=192.168.0.1; name=mysqlanywhere1; port=2638"
  - "|_  ip=192.168.0.2; name=mysqlanywhere2; port=49152"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-sybase-asa-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-sybase-asa-discover.html"
---

Discovers Sybase Anywhere servers on the LAN by sending broadcast discovery messages.
