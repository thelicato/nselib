---
title: "broadcast-hid-discoveryd"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "broadcast"
  - "safe"
shortDescription: "Discovers HID devices on a LAN by sending a discoveryd network broadcast probe."
risk: safe
tags:
  - "discovery"
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-hid-discoveryd"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-hid-discoveryd:"
  - "|   MAC: 00:06:8E:00:00:00; Name: NoEntry; IP Address: 10.123.123.1; Model: EH400; Version: 2.3.1.603 (04/23/2012)"
  - "|   MAC: 00:06:8E:FF:FF:FF; Name: NoExit; IP Address: 10.123.123.123; Model: EH400; Version: 2.3.1.603 (04/23/2012)"
  - "|_  Use --script-args=newtargets to add the results as targets"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-hid-discoveryd.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-hid-discoveryd.html"
---

Discovers HID devices on a LAN by sending a discoveryd network broadcast probe.
