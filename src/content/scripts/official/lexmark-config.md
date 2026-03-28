---
title: "lexmark-config"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves configuration information from a Lexmark S300-S400 printer."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 9100 --script=lexmark-config <target>"
outputPreview:
  - "Interesting ports on 192.168.1.111:"
  - "PORT     STATE   SERVICE REASON"
  - "9100/udp unknown unknown unknown-response"
  - "| lexmark-config:"
  - "|   IPADDRESS: 10.46.200.170"
  - "|   IPNETMASK: 255.255.255.0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/lexmark-config.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/lexmark-config.html"
---

Retrieves configuration information from a Lexmark S300-S400 printer.
The Lexmark S302 responds to the NTPRequest version probe with its
configuration. The response decodes as mDNS, so the request was modified
to resemble an mDNS request as close as possible. However, the port
(9100/udp) is listed as something completely different (HBN3) in
documentation from Lexmark. See
 http://www.lexmark.com/vgn/images/portal/Security%20Features%20of%20Lexmark%20MFPs%20v1_1.pdf .
