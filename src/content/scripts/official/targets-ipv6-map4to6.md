---
title: "targets-ipv6-map4to6"
source: official
category: "Discovery"
categories:
  - "discovery"
shortDescription: "This script runs in the pre-scanning phase to map IPv4 addresses onto IPv6\nnetworks and add them to the scan queue."
risk: informational
tags:
  - "discovery"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -6 --script targets-ipv6-map4to6 --script-args newtargets,targets-ipv6-map4to6.IPv4Hosts={192.168.1.0/24},targets-ipv6-subnet={2001:db8:c0ca::/64}"
outputPreview:
  - "Pre-scan script results:"
  - "| targets-ipv6-map4to6:"
  - "|   node count: 256"
  - "|   addresses:"
  - "|_    2001:db8:c0ca:0:0:0:c0a8:100/120"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/targets-ipv6-map4to6.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/targets-ipv6-map4to6.html"
---

This script runs in the pre-scanning phase to map IPv4 addresses onto IPv6
networks and add them to the scan queue.
The technique is more general than what is technically termed "IPv4-mapped IPv6
addresses." The lower 4 bytes of the IPv6 network address are replaced with the
4 bytes of IPv4 address. When the IPv6 network is ::ffff:0:0/96, then the
script generates IPv4-mapped IPv6 addresses. When the network is ::/96, then it
generates IPv4-compatible IPv6 addresses.
