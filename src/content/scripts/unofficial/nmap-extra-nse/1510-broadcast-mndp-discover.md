---
title: "1510-broadcast-mndp-discover"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "broadcast"
  - "safe"
shortDescription: "Discovers MikroTik devices on a LAN by sending a MikroTik Neighbor Discovery Protocol (MNDP) network broadcast probe."
risk: safe
tags:
  - "discovery"
  - "broadcast"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script broadcast-mndp-discover"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-mndp-discover:"
  - "|   MAC Address: 00:0c:29:6d:a7:63, IP Address: 0.0.0.0; Identity: MikroTik; Version: 6.42.12 (long-term); Platform: MikroTik; Software ID: GXCE-KYGV; Uptime: 1h14m; Board: x86; Unpacking: None; Interface: ether1"
  - "|   MAC Address: 00:0c:29:6d:a7:63, IP Address: fe80::20c:29ff:fe6d:a763; Identity: MikroTik; Version: 6.42.12 (long-term); Platform: MikroTik; Software ID: GXCE-KYGV; Uptime: 1h14m; Board: x86; Unpacking: None; Interface: ether1"
  - "|   MAC Address: 00:0c:29:8b:de:c6, IP Address: 10.1.1.123; Identity: MikroTik; Version: 6.10; Platform: MikroTik; Software ID: 33UY-8JI2; Uptime: 0h42m; Board: x86; Unpacking: None; Interface: ether1"
  - "|_  MAC Address: 00:0c:29:8b:de:c6, IP Address: fe80::20c:29ff:fe8b:dec6; Identity: MikroTik; Version: 6.10; Platform: MikroTik; Software ID: 33UY-8JI2; Uptime: 0h42m; Board: x86; Unpacking: None; Interface: ether1"
author: "Brendan Coles (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1510-broadcast-mndp-discover.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Discovers MikroTik devices on a LAN by sending a MikroTik Neighbor Discovery Protocol (MNDP) network broadcast probe.
For more information about MNDP, see:
* https://mikrotik.com/testdocs/ros/2.9/ip/mndp.php
* https://wiki.mikrotik.com/wiki/Manual:IP/Neighbor_discovery
* https://www.wireshark.org/docs/dfref/m/mndp.html
* https://hadler.me/cc/mikrotik-neighbor-discovery-mndp/
