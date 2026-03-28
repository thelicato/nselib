---
title: "broadcast-listener"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Sniffs the network for incoming broadcast communication and\nattempts to decode the received packets. It supports protocols like CDP, HSRP,\nSpotify, DropBox, DHCP, ARP and a few more. See packetdecoders.lua for more\ninformation."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-listener\nnmap --script broadcast-listener -e eth0"
outputPreview:
  - "| broadcast-listener:"
  - "|   udp"
  - "|       Netbios"
  - "|         ip           query"
  - "|         192.168.0.60 \\x01\\x02__MSBROWSE__\\x02\\x01"
  - "|       DHCP"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-listener.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-listener.html"
---

Sniffs the network for incoming broadcast communication and
attempts to decode the received packets. It supports protocols like CDP, HSRP,
Spotify, DropBox, DHCP, ARP and a few more. See packetdecoders.lua for more
information.
The script attempts to sniff all ethernet based interfaces with an IPv4 address
unless a specific interface was given using the -e argument to Nmap.
