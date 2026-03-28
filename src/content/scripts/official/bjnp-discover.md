---
title: "bjnp-discover"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Retrieves printer or scanner information from a remote device supporting the\nBJNP protocol. The protocol is known to be supported by network based Canon\ndevices."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "sudo nmap -sU -p 8611,8612 --script bjnp-discover <ip>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8611/udp open  canon-bjnp1"
  - "| bjnp-discover:"
  - "|   Manufacturer: Canon"
  - "|   Model: MG5200 series"
  - "|   Description: Canon MG5200 series"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/bjnp-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/bjnp-discover.html"
---

Retrieves printer or scanner information from a remote device supporting the
BJNP protocol. The protocol is known to be supported by network based Canon
devices.
