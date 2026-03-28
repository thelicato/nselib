---
title: "bacnet-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "version"
shortDescription: "Discovers and enumerates BACNet Devices collects device information based off\nstandard requests. In some cases, devices may not strictly follow the\nspecifications, or may comply with older versions of the specifications, and\nwill result in a BACNET error response. Presence of this error positively\nidentifies the device as a BACNet device, but no enumeration is possible."
risk: informational
tags:
  - "discovery"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script bacnet-info -sU -p 47808 <host>"
outputPreview:
  - "47808/udp open  bacnet"
  - "| bacnet-discover:"
  - "|   Vendor ID: BACnet Stack at SourceForge (260)"
  - "|   Vendor Name: BACnet Stack at SourceForge"
  - "|   Instance Number: 260001"
  - "|   Firmware: 0.8.2"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/bacnet-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/bacnet-info.html"
---

Discovers and enumerates BACNet Devices collects device information based off
standard requests. In some cases, devices may not strictly follow the
specifications, or may comply with older versions of the specifications, and
will result in a BACNET error response. Presence of this error positively
identifies the device as a BACNet device, but no enumeration is possible.
Note: Requests and responses are via UDP 47808, ensure scanner will receive UDP
47808 source and destination responses.
http://digitalbond.com
