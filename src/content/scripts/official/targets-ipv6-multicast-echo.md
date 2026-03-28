---
title: "targets-ipv6-multicast-echo"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "broadcast"
  - "safe"
shortDescription: "Sends an ICMPv6 echo request packet to the all-nodes link-local\nmulticast address ( ff02::1 ) to discover responsive hosts\non a LAN without needing to individually ping each IPv6 address."
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
usage: "./nmap -6 --script=targets-ipv6-multicast-echo.nse --script-args 'newtargets,interface=eth0' -sL"
outputPreview:
  - "Pre-scan script results:"
  - "| targets-ipv6-multicast-echo:"
  - "|   IP: 2001:0db8:0000:0000:0000:0000:0000:0001  MAC: 11:22:33:44:55:66  IFACE: eth0"
  - "|_  Use --script-args=newtargets to add the results as targets"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/targets-ipv6-multicast-echo.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/targets-ipv6-multicast-echo.html"
---

Sends an ICMPv6 echo request packet to the all-nodes link-local
multicast address ( ff02::1 ) to discover responsive hosts
on a LAN without needing to individually ping each IPv6 address.
