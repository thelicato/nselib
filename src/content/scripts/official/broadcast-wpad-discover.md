---
title: "broadcast-wpad-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Retrieves a list of proxy servers on a LAN using the Web Proxy\nAutodiscovery Protocol (WPAD). It implements both the DHCP and DNS\nmethods of doing so and starts by querying DHCP to get the address.\nDHCP discovery requires nmap to be running in privileged mode and will\nbe skipped when this is not the case. DNS discovery relies on the\nscript being able to resolve the local domain either through a script\nargument or by attempting to reverse resolve the local IP."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-wpad-discover"
outputPreview:
  - "| broadcast-wpad-discover:"
  - "|   1.2.3.4:8080"
  - "|_  4.5.6.7:3128"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-wpad-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-wpad-discover.html"
---

Retrieves a list of proxy servers on a LAN using the Web Proxy
Autodiscovery Protocol (WPAD). It implements both the DHCP and DNS
methods of doing so and starts by querying DHCP to get the address.
DHCP discovery requires nmap to be running in privileged mode and will
be skipped when this is not the case. DNS discovery relies on the
script being able to resolve the local domain either through a script
argument or by attempting to reverse resolve the local IP.
