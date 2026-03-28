---
title: "knx-gateway-discover"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "broadcast"
shortDescription: "Discovers KNX gateways by sending a KNX Search Request to the multicast address\n224.0.23.12 including a UDP payload with destination port 3671. KNX gateways\nwill respond with a KNX Search Response including various information about the\ngateway, such as KNX address and supported services."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "broadcast"
  - "takeshixx/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script knx-gateway-discover -e eth0"
outputPreview:
  - "Pre-scan script results:"
  - "| knx-gateway-discover:"
  - "|   192.168.178.11:"
  - "|     Body:"
  - "|       HPAI:"
  - "|         Port: 3671"
author: "Niklaus Schiess <nschiess@ernw.de>, Dominik Schneider <dschneider@ernw.de> (upstream: takeshixx/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/takeshixx/nmap-scripts/blob/master/knx-gateway-discover.nse"
---

Imported from the upstream repository [takeshixx/nmap-scripts](https://github.com/takeshixx/nmap-scripts).
Discovers KNX gateways by sending a KNX Search Request to the multicast address
224.0.23.12 including a UDP payload with destination port 3671. KNX gateways
will respond with a KNX Search Response including various information about the
gateway, such as KNX address and supported services.
This script is based on the llmnr-resolve.nse script, as it technicallly.
Credits go out to the author.
Further information:
  * DIN EN 13321-2
  * http://www.knx.org/
