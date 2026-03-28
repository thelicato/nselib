---
title: "dns-service-discovery"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to discover target hosts' services using the DNS Service Discovery protocol."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=dns-service-discovery -p 5353 <target>"
outputPreview:
  - "PORT     STATE SERVICE  REASON"
  - "5353/udp open  zeroconf udp-response"
  - "| dns-service-discovery:"
  - "|   548/tcp afpovertcp"
  - "|     model=MacBook5,1"
  - "|     Address=192.168.0.2 fe80:0:0:0:223:6cff:1234:5678"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-service-discovery.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-service-discovery.html"
---

Attempts to discover target hosts' services using the DNS Service Discovery protocol.
The script first sends a query for _services._dns-sd._udp.local to get a
list of services. It then sends a followup query for each one to try to
get more information.
