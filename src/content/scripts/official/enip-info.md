---
title: "enip-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "version"
shortDescription: "This NSE script is used to send a EtherNet/IP packet to a remote device that\nhas TCP 44818 open. The script will send a Request Identity Packet and once a\nresponse is received, it validates that it was a proper response to the command\nthat was sent, and then will parse out the data. Information that is parsed\nincludes Device Type, Vendor ID, Product name, Serial Number, Product code,\nRevision Number, status, state, as well as the Device IP."
risk: informational
tags:
  - "discovery"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script enip-info -sU -p 44818 <host>"
outputPreview:
  - "PORT\t\tSTATE\tSERVICE\t\t\tREASON"
  - "44818/tcp open \tEtherNet-IP-2\tsyn-ack"
  - "| enip-info:"
  - "|   type: Communications Adapter (12)"
  - "|   vendor: Rockwell Automation/Allen-Bradley (1)"
  - "|   productName: 1769-L32E Ethernet Port"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/enip-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/enip-info.html"
---

This NSE script is used to send a EtherNet/IP packet to a remote device that
has TCP 44818 open. The script will send a Request Identity Packet and once a
response is received, it validates that it was a proper response to the command
that was sent, and then will parse out the data. Information that is parsed
includes Device Type, Vendor ID, Product name, Serial Number, Product code,
Revision Number, status, state, as well as the Device IP.
This script was written based of information collected by using the the
Wireshark dissector for CIP, and EtherNet/IP, The original information was
collected by running a modified version of the ethernetip.py script
( https://github.com/paperwork/pyenip )
http://digitalbond.com
