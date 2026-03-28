---
title: "dhcp-discover"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Sends a DHCPINFORM request to a host on UDP port 67 to obtain all the local configuration parameters\nwithout allocating a new address."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 67 --script=dhcp-discover <target>"
outputPreview:
  - "Interesting ports on 192.168.1.1:"
  - "PORT   STATE SERVICE"
  - "67/udp open  dhcps"
  - "| dhcp-discover:"
  - "|   DHCP Message Type: DHCPACK"
  - "|   Server Identifier: 192.168.1.1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dhcp-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dhcp-discover.html"
---

Sends a DHCPINFORM request to a host on UDP port 67 to obtain all the local configuration parameters
without allocating a new address.
DHCPINFORM is a DHCP request that returns useful information from a DHCP server, without allocating an IP
address. The request sends a list of which fields it wants to know (a handful by default, every field if
verbosity is turned on), and the server responds with the fields that were requested. It should be noted
that the server doesn't have to return every field, nor does it have to return them in the same order,
or honour the request at all. A Linksys WRT54g, for example, completely ignores the list of requested
fields and returns a few standard ones. This script displays every field it receives.
With script arguments, the type of DHCP request can be changed, which can lead to interesting results.
Additionally, the MAC address can be randomized, which in should override the cache on the DHCP server and
assign a new IP address. Extra requests can also be sent to exhaust the IP address range more quickly.
