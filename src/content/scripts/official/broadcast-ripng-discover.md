---
title: "broadcast-ripng-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers hosts and routing information from devices running RIPng on the\nLAN by sending a broadcast RIPng Request command and collecting any responses."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-ripng-discover"
outputPreview:
  - "| broadcast-ripng-discover:"
  - "|   fe80::a00:27ff:fe9a:880c"
  - "|     route                       metric  next hop"
  - "|     fe80:470:0:0:0:0:0:0/64     1"
  - "|     fe80:471:0:0:0:0:0:0/64     1"
  - "|_    fe80:472:0:0:0:0:0:0/64     1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-ripng-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-ripng-discover.html"
---

Discovers hosts and routing information from devices running RIPng on the
LAN by sending a broadcast RIPng Request command and collecting any responses.
