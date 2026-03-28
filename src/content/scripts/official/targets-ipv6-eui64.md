---
title: "targets-ipv6-eui64"
source: official
category: "Discovery"
categories:
  - "discovery"
shortDescription: "This script runs in the pre-scanning phase to convert 48-bit MAC addresses to\nEUI-64 IPv6 addresses, which are often used for auto-configuration. Generated\naddresses may be added to the scan queue."
risk: informational
tags:
  - "discovery"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -6 --script targets-ipv6-eui64 --script-args newtargets,targets-ipv6-eui64.input=macs.txt,targets-ipv6-subnet={2001:db8:c0ca::/64}"
outputPreview:
  - "Pre-scan script results:"
  - "| targets-ipv6-eui64:"
  - "|_  2001:db8:c0ca:0:1322:33ff:fe44:5566"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/targets-ipv6-eui64.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/targets-ipv6-eui64.html"
---

This script runs in the pre-scanning phase to convert 48-bit MAC addresses to
EUI-64 IPv6 addresses, which are often used for auto-configuration. Generated
addresses may be added to the scan queue.
The MAC addresses used as input are read from the file named by the
 targets-ipv6-eui64.input script-arg. A good source of these
addresses would be an IPv4 host discovery Nmap scan.
