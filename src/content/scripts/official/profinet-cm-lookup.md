---
title: "profinet-cm-lookup"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Sends a DCERPC EPM Lookup Request to PROFINET devices. the DCE/RPC Endpoint Mapper (EPM) targeting Profinet Devices."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -sU <target_ip> -p 34964 --script profinet-cm-lookup"
outputPreview:
  - "PORT\t\tSTATE\tSERVICE\t\t\tREASON"
  - "34964/udp open|filtered profinet-cm no-response"
  - "| profinet-cm-lookup:"
  - "|   ipAddress: 192.168.10.12"
  - "|   annotationOffset: 0"
  - "|   annotationLength: 64"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/profinet-cm-lookup.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/profinet-cm-lookup.html"
---

Sends a DCERPC EPM Lookup Request to PROFINET devices. the DCE/RPC Endpoint Mapper (EPM) targeting Profinet Devices.
Profinet Devices support the udp-based PNIO-CM protocol under port 34964.
PNIO-CM uses DCE/RPC as its underlying protocol.
Profinet Devices support a DCE/RPC UUID Entity under the UUID variant
'dea00001-6c97-11d1-8271-00a02442df7d'. This script sends the Lookup Request for this UUID.
