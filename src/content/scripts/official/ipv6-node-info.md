---
title: "ipv6-node-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Obtains hostnames, IPv4 and IPv6 addresses through IPv6 Node Information Queries."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -6 <target>"
outputPreview:
  - "| ipv6-node-info:"
  - "|   Hostnames: mac-mini.local"
  - "|   IPv6 addresses: fe80::a8bb:ccff:fedd:eeff, 2001:db8:1234:1234::3"
  - "|_  IPv4 addresses: mac-mini.local"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ipv6-node-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ipv6-node-info.html"
---

Obtains hostnames, IPv4 and IPv6 addresses through IPv6 Node Information Queries.
IPv6 Node Information Queries are defined in RFC 4620. There are three
useful types of queries:

 qtype=2: Node Name

 qtype=3: Node Addresses

 qtype=4: IPv4 Addresses

Some operating systems (Mac OS X and OpenBSD) return hostnames in
response to qtype=4, IPv4 Addresses. In this case, the hostnames are still
shown in the "IPv4 addresses" output row, but are prefixed by "(actually
hostnames)".
