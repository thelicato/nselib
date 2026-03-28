---
title: "broadcast-pim-discovery"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "broadcast"
shortDescription: "Discovers routers that are running PIM (Protocol Independent Multicast)."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "broadcast"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-pim-discovery\n\nnmap --script broadcast-pim-discovery -e eth1\n --script-args 'broadcast-pim-discovery.timeout=10'"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-pim-discovery:"
  - "|   172.16.0.12"
  - "|   172.16.0.31"
  - "|   172.16.0.44"
  - "|_  Use the newtargets script-arg to add the results as targets"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-pim-discovery.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-pim-discovery.html"
---

Discovers routers that are running PIM (Protocol Independent Multicast).
This works by sending a PIM Hello message to the PIM multicast address
224.0.0.13 and listening for Hello messages from other routers.
