---
title: "mtrace"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "broadcast"
shortDescription: "Queries for the multicast path from a source to a destination host."
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
usage: "nmap --script mtrace --script-args 'mtrace.fromip=172.16.45.4'"
outputPreview:
  - "Pre-scan script results:"
  - "| mtrace:"
  - "|   Group 0.0.0.0 from 172.16.45.4 to 172.16.0.1"
  - "|   Source: 172.16.45.4"
  - "|     In address: 172.16.34.3"
  - "|       Out address: 172.16.0.3"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mtrace.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mtrace.html"
---

Queries for the multicast path from a source to a destination host.
This works by sending an IGMP Traceroute Query and listening for IGMP
Traceroute responses. The Traceroute Query is sent to the first hop and
contains information about source, destination and multicast group addresses.
First hop defaults to the multicast All routers address. The default multicast
group address is 0.0.0.0 and the default destination is our own host address. A
source address must be provided. The responses are parsed to get interesting
information about interface addresses, used protocols and error codes.
This is similar to the mtrace utility provided in Cisco IOS.
