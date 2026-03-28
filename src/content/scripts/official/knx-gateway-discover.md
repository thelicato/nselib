---
title: "knx-gateway-discover"
source: official
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
  - "prerule"
scriptTypes:
  - "prerule"
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
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/knx-gateway-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/knx-gateway-discover.html"
---

Discovers KNX gateways by sending a KNX Search Request to the multicast address
224.0.23.12 including a UDP payload with destination port 3671. KNX gateways
will respond with a KNX Search Response including various information about the
gateway, such as KNX address and supported services.
Further information:
 * DIN EN 13321-2
 * http://www.knx.org/
