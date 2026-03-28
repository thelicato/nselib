---
title: "ipv6-multicast-mld-list"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "discovery"
shortDescription: "Uses Multicast Listener Discovery to list the multicast addresses subscribed to\nby IPv6 multicast listeners on the link-local scope. Addresses in the IANA IPv6\nMulticast Address Space Registry have their descriptions listed."
risk: informational
tags:
  - "broadcast"
  - "discovery"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script=ipv6-multicast-mld-list"
outputPreview:
  - "Pre-scan script results:"
  - "| ipv6-multicast-mld-list:"
  - "|   fe80::9fb:25b7:1b7c:e53:"
  - "|     device: wlan0"
  - "|     mac: 38:60:77:3d:b1:ec"
  - "|     multicast_ips:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ipv6-multicast-mld-list.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ipv6-multicast-mld-list.html"
---

Uses Multicast Listener Discovery to list the multicast addresses subscribed to
by IPv6 multicast listeners on the link-local scope. Addresses in the IANA IPv6
Multicast Address Space Registry have their descriptions listed.
