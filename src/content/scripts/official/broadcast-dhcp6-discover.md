---
title: "broadcast-dhcp6-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Sends a DHCPv6 request (Solicit) to the DHCPv6 multicast address,\nparses the response, then extracts and prints the address along with\nany options returned by the server."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -6 --script broadcast-dhcp6-discover"
outputPreview:
  - "| broadcast-dhcp6-discover:"
  - "|   Interface: en0"
  - "|     Message type: Advertise"
  - "|     Transaction id: 74401"
  - "|     Options"
  - "|       Client identifier: MAC: 68:AB:CD:EF:AB:CD; Time: 2012-01-24 20:36:48"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-dhcp6-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-dhcp6-discover.html"
---

Sends a DHCPv6 request (Solicit) to the DHCPv6 multicast address,
parses the response, then extracts and prints the address along with
any options returned by the server.
The script requires Nmap to be run in privileged mode as it binds the socket
to a privileged port (udp/546).
