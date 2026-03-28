---
title: "path-mtu"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Performs simple Path MTU Discovery to target hosts."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script path-mtu target"
outputPreview:
  - "Host script results:"
  - "|_path-mtu: 1492 <= PMTU < 1500"
  - "Host script results:"
  - "|_path-mtu: PMTU == 1006"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/path-mtu.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/path-mtu.html"
---

Performs simple Path MTU Discovery to target hosts.
TCP or UDP packets are sent to the host with the DF (don't fragment) bit set
and with varying amounts of data. If an ICMP Fragmentation Needed is received,
or no reply is received after retransmissions, the amount of data is lowered
and another packet is sent. This continues until (assuming no errors occur) a
reply from the final host is received, indicating the packet reached the host
without being fragmented.
