---
title: "broadcast-pppoe-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers PPPoE (Point-to-Point Protocol over Ethernet) servers using\nthe PPPoE Discovery protocol (PPPoED). PPPoE is an ethernet based\nprotocol so the script has to know what ethernet interface to use for\ndiscovery. If no interface is specified, requests are sent out on all\navailable interfaces."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-pppoe-discover"
outputPreview:
  - "| broadcast-pppoe-discover:"
  - "| Server: 08:00:27:AB:CD:EF"
  - "|   Version: 1"
  - "|   Type: 1"
  - "|   TAGs"
  - "|     AC-Name: ISP"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-pppoe-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-pppoe-discover.html"
---

Discovers PPPoE (Point-to-Point Protocol over Ethernet) servers using
the PPPoE Discovery protocol (PPPoED). PPPoE is an ethernet based
protocol so the script has to know what ethernet interface to use for
discovery. If no interface is specified, requests are sent out on all
available interfaces.
As the script send raw ethernet frames it requires Nmap to be run in privileged
mode to operate.
