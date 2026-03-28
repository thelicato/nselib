---
title: "targets-sniffer"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "discovery"
  - "safe"
shortDescription: "Sniffs the local network for a configurable amount of time (10 seconds\nby default) and prints discovered addresses. If the\n newtargets script argument is set, discovered addresses\nare added to the scan queue."
risk: safe
tags:
  - "broadcast"
  - "discovery"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -sL --script=targets-sniffer --script-args=newtargets,targets-sniffer.timeout=5s,targets-sniffer.interface=eth0"
outputPreview:
  - "Pre-scan script results:"
  - "| targets-sniffer:"
  - "| 192.168.0.1"
  - "| 192.168.0.3"
  - "| 192.168.0.35"
  - "|_192.168.0.100"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/targets-sniffer.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/targets-sniffer.html"
---

Sniffs the local network for a configurable amount of time (10 seconds
by default) and prints discovered addresses. If the
 newtargets script argument is set, discovered addresses
are added to the scan queue.
Requires root privileges. Either the targets-sniffer.interface script
argument or -e Nmap option to define which interface to use.
