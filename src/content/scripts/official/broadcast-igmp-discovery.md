---
title: "broadcast-igmp-discovery"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "broadcast"
shortDescription: "Discovers targets that have IGMP Multicast memberships and grabs interesting information."
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
usage: "nmap --script broadcast-igmp-discovery\nnmap --script broadcast-igmp-discovery -e wlan0\nnmap --script broadcast-igmp-discovery\n--script-args 'broadcast-igmp-discovery.version=all, broadcast-igmp-discovery.timeout=3s'"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-igmp-discovery:"
  - "|   192.168.2.2"
  - "|     Interface: tap0"
  - "|     Version: 3"
  - "|     Group: 239.1.1.1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-igmp-discovery.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-igmp-discovery.html"
---

Discovers targets that have IGMP Multicast memberships and grabs interesting information.
The scripts works by sending IGMP Membership Query message to the 224.0.0.1 All
Hosts multicast address and listening for IGMP Membership Report messages. The
script then extracts all the interesting information from the report messages
such as the version, group, mode, source addresses (depending on the version).
The script defaults to sending an IGMPv2 Query but this could be changed to
another version (version 1 or 3) or to sending queries of all three version. If
no interface was specified as a script argument or with the -e option, the
script will proceed to sending queries through all the valid ethernet
interfaces.
