---
title: "targets-ipv6-multicast-mld"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "broadcast"
  - "safe"
shortDescription: "Attempts to discover available IPv6 hosts on the LAN by sending an MLD\n(multicast listener discovery) query to the link-local multicast address\n(ff02::1) and listening for any responses. The query's maximum response delay\nset to 1 to provoke hosts to respond immediately rather than waiting for other\nresponses from their multicast group."
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
usage: "nmap -6 --script=targets-ipv6-multicast-mld.nse --script-args 'newtargets,interface=eth0'"
outputPreview:
  - "Pre-scan script results:"
  - "| targets-ipv6-multicast-mld:"
  - "|   IP: fe80::5a55:abcd:ef01:2345  MAC: 58:55:ab:cd:ef:01  IFACE: en0"
  - "|   IP: fe80::9284:0123:4567:89ab  MAC: 90:84:01:23:45:67  IFACE: en0"
  - "|"
  - "|_  Use --script-args=newtargets to add the results as targets"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/targets-ipv6-multicast-mld.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/targets-ipv6-multicast-mld.html"
---

Attempts to discover available IPv6 hosts on the LAN by sending an MLD
(multicast listener discovery) query to the link-local multicast address
(ff02::1) and listening for any responses. The query's maximum response delay
set to 1 to provoke hosts to respond immediately rather than waiting for other
responses from their multicast group.
