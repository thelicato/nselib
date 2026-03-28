---
title: "broadcast-wsdd-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Uses a multicast query to discover devices supporting the Web Services\nDynamic Discovery (WS-Discovery) protocol. It also attempts to locate\nany published Windows Communication Framework (WCF) web services (.NET\n4.0 or later)."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "sudo ./nmap --script broadcast-wsdd-discover"
outputPreview:
  - "| broadcast-wsdd-discover:"
  - "|   Devices"
  - "|     1.2.3.116"
  - "|         Message id: 9ea97e41-e874-faa7-fe28-deadbeefceb3"
  - "|         Address: http://1.2.3.116:50000"
  - "|         Type: Device wprt:PrintDeviceType"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-wsdd-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-wsdd-discover.html"
---

Uses a multicast query to discover devices supporting the Web Services
Dynamic Discovery (WS-Discovery) protocol. It also attempts to locate
any published Windows Communication Framework (WCF) web services (.NET
4.0 or later).
