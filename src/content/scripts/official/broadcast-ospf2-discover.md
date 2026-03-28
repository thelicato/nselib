---
title: "broadcast-ospf2-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "discovery"
  - "safe"
shortDescription: "Discover IPv4 networks using Open Shortest Path First version 2(OSPFv2) protocol."
risk: safe
tags:
  - "broadcast"
  - "discovery"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script=broadcast-ospf2-discover\nnmap --script=broadcast-ospf2-discover -e wlan0"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-ospf2-discover:"
  - "|   Area ID: 0.0.0.0"
  - "|   External Routes"
  - "|     192.168.24.0/24"
  - "|_  Use the newtargets script-arg to add the results as targets"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-ospf2-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-ospf2-discover.html"
---

Discover IPv4 networks using Open Shortest Path First version 2(OSPFv2) protocol.
The script works by listening for OSPF Hello packets from the 224.0.0.5
multicast address. The script then replies and attempts to create a neighbor
relationship, in order to discover network database.
If no interface was provided as a script argument or through the -e option,
the script will fail unless a single interface is present on the system.
