---
title: "nat-pmp-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Gets the routers WAN IP using the NAT Port Mapping Protocol (NAT-PMP).\nThe NAT-PMP protocol is supported by a broad range of routers including:\n\n Apple AirPort Express\n\n Apple AirPort Extreme\n\n Apple Time Capsule\n\n DD-WRT\n\n OpenWrt v8.09 or higher, with MiniUPnP daemon\n\n pfSense v2.0\n\n Tarifa (firmware) (Linksys WRT54G/GL/GS)\n\n Tomato Firmware v1.24 or higher. (Linksys WRT54G/GL/GS and many more)\n\n Peplink Balance"
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 5351 --script=nat-pmp-info <target>"
outputPreview:
  - "| nat-pmp-info:"
  - "|_  WAN IP: 192.0.2.13"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nat-pmp-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nat-pmp-info.html"
---

Gets the routers WAN IP using the NAT Port Mapping Protocol (NAT-PMP).
The NAT-PMP protocol is supported by a broad range of routers including:

 Apple AirPort Express

 Apple AirPort Extreme

 Apple Time Capsule

 DD-WRT

 OpenWrt v8.09 or higher, with MiniUPnP daemon

 pfSense v2.0

 Tarifa (firmware) (Linksys WRT54G/GL/GS)

 Tomato Firmware v1.24 or higher. (Linksys WRT54G/GL/GS and many more)

 Peplink Balance
