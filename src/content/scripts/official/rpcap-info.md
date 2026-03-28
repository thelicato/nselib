---
title: "rpcap-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Connects to the rpcap service (provides remote sniffing capabilities\nthrough WinPcap) and retrieves interface information. The service can either be\nsetup to require authentication or not and also supports IP restrictions."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 2002 <ip> --script rpcap-info\nnmap -p 2002 <ip> --script rpcap-info --script-args=\"creds.rpcap='administrator:foobar'\""
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "2002/tcp open  rpcap   syn-ack"
  - "| rpcap-info:"
  - "|   \\Device\\NPF_{0D5D1364-1F1F-4892-8AC3-B838258F9BB8}"
  - "|     Intel(R) PRO/1000 MT Desktop Adapter"
  - "|     Addresses"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rpcap-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rpcap-info.html"
---

Connects to the rpcap service (provides remote sniffing capabilities
through WinPcap) and retrieves interface information. The service can either be
setup to require authentication or not and also supports IP restrictions.
