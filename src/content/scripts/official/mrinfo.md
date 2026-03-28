---
title: "mrinfo"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "broadcast"
shortDescription: "Queries targets for multicast routing information."
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
usage: "nmap --script mrinfo\nnmap --script mrinfo -e eth1\nnmap --script mrinfo --script-args 'mrinfo.target=172.16.0.4'"
outputPreview:
  - "Pre-scan script results:"
  - "| mrinfo:"
  - "|   Source: 224.0.0.1"
  - "|     Version 12.4"
  - "|     Local address: 172.16.0.2"
  - "|       Neighbor: 172.16.0.4"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mrinfo.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mrinfo.html"
---

Queries targets for multicast routing information.
This works by sending a DVMRP Ask Neighbors 2 request to the target and
listening for DVMRP Neighbors 2 responses that are sent back and which contain
local addresses and the multicast neighbors on each interface of the target. If
no specific target is specified, the request will be sent to the 224.0.0.1 All
Hosts multicast address.
This script is similar somehow to the mrinfo utility included with Windows and
Cisco IOS.
