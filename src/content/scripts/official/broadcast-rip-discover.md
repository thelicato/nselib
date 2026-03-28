---
title: "broadcast-rip-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers hosts and routing information from devices running RIPv2 on the\nLAN. It does so by sending a RIPv2 Request command and collects the responses\nfrom all devices responding to the request."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-rip-discover"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-rip-discover:"
  - "| Discovered RIPv2 devices"
  - "|   10.0.200.107"
  - "|     ip           netmask        nexthop       metric"
  - "|     10.46.100.0  255.255.255.0  0.0.0.0       1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-rip-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-rip-discover.html"
---

Discovers hosts and routing information from devices running RIPv2 on the
LAN. It does so by sending a RIPv2 Request command and collects the responses
from all devices responding to the request.
