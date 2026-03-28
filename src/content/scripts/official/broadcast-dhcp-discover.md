---
title: "broadcast-dhcp-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Sends a DHCP request to the broadcast address (255.255.255.255) and reports\nthe results. By default, the script uses a static MAC address\n(DE:AD:CO:DE:CA:FE) in order to prevent IP pool exhaustion."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "sudo nmap --script broadcast-dhcp-discover"
outputPreview:
  - "| broadcast-dhcp-discover:"
  - "|   Response 1 of 1:"
  - "|     Interface: wlp1s0"
  - "|     IP Offered: 192.168.1.114"
  - "|     DHCP Message Type: DHCPOFFER"
  - "|     Server Identifier: 192.168.1.1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-dhcp-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-dhcp-discover.html"
---

Sends a DHCP request to the broadcast address (255.255.255.255) and reports
the results. By default, the script uses a static MAC address
(DE:AD:CO:DE:CA:FE) in order to prevent IP pool exhaustion.
The script reads the response using pcap by opening a listening pcap socket
on all available ethernet interfaces that are reported up. If no response
has been received before the timeout has been reached (default 10 seconds)
the script will abort execution.
The script needs to be run as a privileged user, typically root.
