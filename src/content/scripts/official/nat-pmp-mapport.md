---
title: "nat-pmp-mapport"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Maps a WAN port on the router to a local port on the client using the NAT Port Mapping Protocol (NAT-PMP). It supports the following operations:\n\n map - maps a new external port on the router to an internal port of the requesting IP\n\n unmap - unmaps a previously mapped port for the requesting IP\n\n unmapall - unmaps all previously mapped ports for the requesting IP"
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 5351 <ip> --script nat-pmp-mapport --script-args='op=map,pubport=8080,privport=8080,protocol=tcp'\nnmap -sU -p 5351 <ip> --script nat-pmp-mapport --script-args='op=unmap,pubport=8080,privport=8080,protocol=tcp'\nnmap -sU -p 5351 <ip> --script nat-pmp-mapport --script-args='op=unmapall,protocol=tcp'"
outputPreview:
  - "PORT     STATE SERVICE"
  - "5351/udp open  nat-pmp"
  - "| nat-pmp-mapport:"
  - "|_  Successfully mapped tcp 1.2.3.4:8080 -> 192.168.0.100:80"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nat-pmp-mapport.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nat-pmp-mapport.html"
---

Maps a WAN port on the router to a local port on the client using the NAT Port Mapping Protocol (NAT-PMP). It supports the following operations:

 map - maps a new external port on the router to an internal port of the requesting IP

 unmap - unmaps a previously mapped port for the requesting IP

 unmapall - unmaps all previously mapped ports for the requesting IP
