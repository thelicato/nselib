---
title: "stun-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves the external IP address of a NAT:ed host using the STUN protocol."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -PN -sU -p 3478 --script stun-info <ip>"
outputPreview:
  - "PORT     STATE         SERVICE"
  - "3478/udp open|filtered stun"
  - "| stun-info:"
  - "|_  External IP: 80.216.42.106"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/stun-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/stun-info.html"
---

Retrieves the external IP address of a NAT:ed host using the STUN protocol.
