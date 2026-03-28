---
title: "nbns-interfaces"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Retrieves IP addresses of the target's network interfaces via NetBIOS NS.\nAdditional network interfaces may reveal more information about the target,\nincluding finding paths to hidden non-routed networks via multihomed systems."
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
usage: "nmap -sU -p 137 --script nbns-interfaces <host>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "137/udp open  netbios-ns"
  - "| nbns-interfaces:"
  - "|   hostname: NOTEBOOK-NB3"
  - "|   interfaces:"
  - "|     10.5.4.89"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nbns-interfaces.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nbns-interfaces.html"
---

Retrieves IP addresses of the target's network interfaces via NetBIOS NS.
Additional network interfaces may reveal more information about the target,
including finding paths to hidden non-routed networks via multihomed systems.
