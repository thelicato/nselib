---
title: "s7-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "version"
shortDescription: "Enumerates Siemens S7 PLC Devices and collects their device information. This\nscript is based off PLCScan that was developed by Positive Research and\nScadastrangelove ( https://code.google.com/p/plcscan/ ). This script is meant to\nprovide the same functionality as PLCScan inside of Nmap. Some of the\ninformation that is collected by PLCScan was not ported over; this\ninformation can be parsed out of the packets that are received."
risk: informational
tags:
  - "discovery"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script s7-info.nse -p 102 <host/s>"
outputPreview:
  - "102/tcp open  Siemens S7 PLC"
  - "| s7-info:"
  - "|   Basic Hardware: 6ES7 315-2AG10-0AB0"
  - "|   System Name: SIMATIC 300(1)"
  - "|   Copyright: Original Siemens Equipment"
  - "|   Version: 2.6.9"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/s7-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/s7-info.html"
---

Enumerates Siemens S7 PLC Devices and collects their device information. This
script is based off PLCScan that was developed by Positive Research and
Scadastrangelove ( https://code.google.com/p/plcscan/ ). This script is meant to
provide the same functionality as PLCScan inside of Nmap. Some of the
information that is collected by PLCScan was not ported over; this
information can be parsed out of the packets that are received.
Thanks to Positive Research, and Dmitry Efanov for creating PLCScan
