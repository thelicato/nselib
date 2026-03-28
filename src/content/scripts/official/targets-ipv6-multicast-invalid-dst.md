---
title: "targets-ipv6-multicast-invalid-dst"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "broadcast"
  - "safe"
shortDescription: "Sends an ICMPv6 packet with an invalid extension header to the\nall-nodes link-local multicast address ( ff02::1 ) to\ndiscover (some) available hosts on the LAN. This works because some\nhosts will respond to this probe with an ICMPv6 Parameter Problem\npacket."
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
usage: "./nmap -6 --script=targets-ipv6-multicast-invalid-dst.nse --script-args 'newtargets,interface=eth0' -sP"
outputPreview:
  - "Pre-scan script results:"
  - "| targets-ipv6-multicast-invalid-dst:"
  - "|   IP: 2001:0db8:0000:0000:0000:0000:0000:0001  MAC: 11:22:33:44:55:66  IFACE: eth0"
  - "|_  Use --script-args=newtargets to add the results as targets"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/targets-ipv6-multicast-invalid-dst.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/targets-ipv6-multicast-invalid-dst.html"
---

Sends an ICMPv6 packet with an invalid extension header to the
all-nodes link-local multicast address ( ff02::1 ) to
discover (some) available hosts on the LAN. This works because some
hosts will respond to this probe with an ICMPv6 Parameter Problem
packet.
