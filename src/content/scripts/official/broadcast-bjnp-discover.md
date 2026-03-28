---
title: "broadcast-bjnp-discover"
source: official
category: "Safe"
categories:
  - "safe"
  - "broadcast"
shortDescription: "Attempts to discover Canon devices (Printers/Scanners) supporting the\nBJNP protocol by sending BJNP Discover requests to the network\nbroadcast address for both ports associated with the protocol."
risk: safe
tags:
  - "safe"
  - "broadcast"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-bjnp-discover"
outputPreview:
  - "| broadcast-bjnp-discover:"
  - "|   192.168.0.10"
  - "|     Printer"
  - "|       Manufacturer: Canon"
  - "|       Model: MG5200 series"
  - "|       Description: Canon MG5200 series"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-bjnp-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-bjnp-discover.html"
---

Attempts to discover Canon devices (Printers/Scanners) supporting the
BJNP protocol by sending BJNP Discover requests to the network
broadcast address for both ports associated with the protocol.
The script then attempts to retrieve the model, version and some additional
information for all discovered devices.
