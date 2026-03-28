---
title: "lantronix-77feh-info"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to get basic info and server status from a Lantronix devices."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "kost/nmap-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 30718 <ip> --script=lantronix-77feh-info"
outputPreview:
  - "PORT      STATE         SERVICE"
  - "30718/udp open|filtered Lantronix77FEh"
  - "| lantronix-77feh-info:"
  - "|   Version: 5.8.8.1"
  - "|   Device Type: X2D"
  - "|   MAC address: 0123456789ab"
author: "Vlatko Kosturjak (upstream: kost/nmap-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/kost/nmap-nse/blob/master/scripts/lantronix-77feh-info.nse"
---

Imported from the upstream repository [kost/nmap-nse](https://github.com/kost/nmap-nse).
Attempts to get basic info and server status from a Lantronix devices.
For more information about 77FEh, see:
https://github.com/kost/lantronix-witchcraft
