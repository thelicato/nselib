---
title: "snmp-interfaces"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to enumerate network interfaces through SNMP."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "prerule"
  - "portrule"
scriptTypes:
  - "prerule"
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 161 --script=snmp-interfaces <target>"
outputPreview:
  - "| snmp-interfaces:"
  - "|   eth0"
  - "|     IP address: 192.168.221.128"
  - "|     MAC address: 00:0c:29:01:e2:74 (VMware)"
  - "|     Type: ethernetCsmacd  Speed: 1 Gbps"
  - "|_    Traffic stats: 6.45 Mb sent, 15.01 Mb received"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-interfaces.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-interfaces.html"
---

Attempts to enumerate network interfaces through SNMP.
This script can also be run during Nmap's pre-scanning phase and can
attempt to add the SNMP server's interface addresses to the target
list. The script argument snmp-interfaces.host is
required to know what host to probe. To specify a port for the SNMP
server other than 161, use snmp-interfaces.port . When
run in this way, the script's output tells how many new targets were
successfully added.
