---
title: "broadcast-sonicwall-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers Sonicwall firewalls which are directly attached (not routed) using\nthe same method as the manufacturers own 'SetupTool'. An interface needs to be\nconfigured, as the script broadcasts a UDP packet."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -e eth0 --script broadcast-sonicwall-discover"
outputPreview:
  - "| broadcast-sonicwall-discover:"
  - "|   192.168.5.1"
  - "|     MAC/Serial: 0006B1001122"
  - "|     Subnetmask: 255.255.255.0"
  - "|     Firmware: 3.9.1.2"
  - "|_    ROM: 14.0.1.1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-sonicwall-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-sonicwall-discover.html"
---

Discovers Sonicwall firewalls which are directly attached (not routed) using
the same method as the manufacturers own 'SetupTool'. An interface needs to be
configured, as the script broadcasts a UDP packet.
The script needs to be run as a privileged user, typically root.
