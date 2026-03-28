---
title: "broadcast-dns-service-discovery"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Attempts to discover hosts' services using the DNS Service Discovery protocol. It sends a multicast DNS-SD query and collects all the responses."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script=broadcast-dns-service-discovery"
outputPreview:
  - "| broadcast-dns-service-discovery:"
  - "|   1.2.3.1"
  - "|     _ssh._tcp.local"
  - "|     _http._tcp.local"
  - "|   1.2.3.50"
  - "|     22/tcp ssh"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-dns-service-discovery.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-dns-service-discovery.html"
---

Attempts to discover hosts' services using the DNS Service Discovery protocol. It sends a multicast DNS-SD query and collects all the responses.
The script first sends a query for _services._dns-sd._udp.local to get a
list of services. It then sends a followup query for each one to try to
get more information.
