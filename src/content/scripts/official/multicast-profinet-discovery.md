---
title: "multicast-profinet-discovery"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "info"
  - "safe"
  - "broadcast"
shortDescription: "Sends a multicast PROFINET DCP Identify All message and prints the responses."
risk: safe
tags:
  - "discovery"
  - "info"
  - "safe"
  - "broadcast"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -sV --script=multicast-profinet-discovery <target>"
outputPreview:
  - "multicast-profinet-discovery:"
  - "|   00:0E:8C:C9:41:15:"
  - "|       Interface: eth0"
  - "|       IP:"
  - "|         ip_info: IP set"
  - "|         ip_addr: 10.253.81.37"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/multicast-profinet-discovery.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/multicast-profinet-discovery.html"
---

Sends a multicast PROFINET DCP Identify All message and prints the responses.
