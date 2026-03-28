---
title: "knx-gateway-info"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Identifies a KNX gateway on UDP port 3671 by sending a KNX Description Request."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "takeshixx/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: ""
outputPreview:
  - "3671/udp open  efcp    KNXnet/IP Gateway"
  - "| knx-gateway-info:"
  - "|   Body:"
  - "|     DIB_DEV_INFO:"
  - "|       KNX address: 1.2.200"
  - "|       Decive serial: 00e70880d151"
author: "Niklaus Schiess <nschiess@ernw.de>, Dominik Schneider <dschneider@ernw.de> (upstream: takeshixx/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/takeshixx/nmap-scripts/blob/master/knx-gateway-info.nse"
---

Imported from the upstream repository [takeshixx/nmap-scripts](https://github.com/takeshixx/nmap-scripts).
Identifies a KNX gateway on UDP port 3671 by sending a KNX Description Request.
Further information:
  * DIN EN 13321-2
  * http://www.knx.org/
