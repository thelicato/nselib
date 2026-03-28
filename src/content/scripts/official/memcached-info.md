---
title: "memcached-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves information (including system architecture, process ID, and\nserver time) from distributed memory object caching system memcached."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 11211 --script memcached-info"
outputPreview:
  - "11211/udp open  unknown"
  - "| memcached-info:"
  - "|   Process ID: 18568"
  - "|   Uptime: 6950 seconds"
  - "|   Server time: 2018-03-02T03:35:09"
  - "|   Architecture: 64 bit"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/memcached-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/memcached-info.html"
---

Retrieves information (including system architecture, process ID, and
server time) from distributed memory object caching system memcached.
