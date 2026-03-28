---
title: "rpcinfo"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "default"
  - "safe"
  - "version"
shortDescription: "Connects to portmapper and fetches a list of all registered programs. It then\nprints out a table including (for each program) the RPC program number,\nsupported version numbers, port number and protocol, and program name."
risk: safe
tags:
  - "discovery"
  - "default"
  - "safe"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "111/tcp open  rpcbind"
  - "| rpcinfo:"
  - "|   program version   port/proto  service"
  - "|   100000  2,3,4        111/tcp  rpcbind"
  - "|   100000  2,3,4        111/udp  rpcbind"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rpcinfo.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rpcinfo.html"
---

Connects to portmapper and fetches a list of all registered programs. It then
prints out a table including (for each program) the RPC program number,
supported version numbers, port number and protocol, and program name.
