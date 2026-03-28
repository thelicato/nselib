---
title: "broadcast-eigrp-discovery"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "broadcast"
  - "safe"
shortDescription: "Performs network discovery and routing information gathering through\nCisco's Enhanced Interior Gateway Routing Protocol (EIGRP)."
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
usage: "nmap --script=broadcast-eigrp-discovery <targets>\nnmap --script=broadcast-eigrp-discovery <targets> -e wlan0"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-eigrp-discovery:"
  - "| 192.168.2.2"
  - "|   Interface: eth0"
  - "|   A.S: 1"
  - "|   Virtual Router ID: 0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-eigrp-discovery.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-eigrp-discovery.html"
---

Performs network discovery and routing information gathering through
Cisco's Enhanced Interior Gateway Routing Protocol (EIGRP).
The script works by sending an EIGRP Hello packet with the specified Autonomous
System value to the 224.0.0.10 multicast address and listening for EIGRP Update
packets. The script then parses the update responses for routing information.
If no A.S value was provided by the user, the script will listen for multicast
Hello packets to grab an A.S value. If no interface was provided as a script
argument or through the -e option, the script will send packets and listen
through all valid ethernet interfaces simultaneously.
