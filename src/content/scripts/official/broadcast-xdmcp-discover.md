---
title: "broadcast-xdmcp-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers servers running the X Display Manager Control Protocol (XDMCP) by\nsending a XDMCP broadcast request to the LAN. Display managers allowing access\nare marked using the keyword Willing in the result."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-xdmcp-discover"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-xdmcp-discover:"
  - "|_  192.168.2.162 - Willing"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-xdmcp-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-xdmcp-discover.html"
---

Discovers servers running the X Display Manager Control Protocol (XDMCP) by
sending a XDMCP broadcast request to the LAN. Display managers allowing access
are marked using the keyword Willing in the result.
