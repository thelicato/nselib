---
title: "lltd-discovery"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "discovery"
  - "safe"
shortDescription: "Uses the Microsoft LLTD protocol to discover hosts on a local network."
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
usage: "nmap -e <interface> --script lltd-discovery"
outputPreview:
  - "| lltd-discovery:"
  - "|   192.168.1.64"
  - "|     Hostname: acer-PC"
  - "|     Mac: 18:f4:6a:4f:de:a2 (Hon Hai Precision Ind. Co.)"
  - "|     IPv6: fe80:0000:0000:0000:0000:0000:c0a8:0134"
  - "|   192.168.1.33"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/lltd-discovery.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/lltd-discovery.html"
---

Uses the Microsoft LLTD protocol to discover hosts on a local network.
For more information on the LLTD protocol please refer to
 http://www.microsoft.com/whdc/connect/Rally/LLTD-spec.mspx
