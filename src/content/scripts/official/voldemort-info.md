---
title: "voldemort-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves cluster and store information from the Voldemort distributed key-value store using the Voldemort Native Protocol."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 6666 --script voldemort-info <ip>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "6666/tcp open  irc"
  - "| voldemort-info:"
  - "|   Cluster"
  - "|     Name: mycluster"
  - "|     Id: 0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/voldemort-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/voldemort-info.html"
---

Retrieves cluster and store information from the Voldemort distributed key-value store using the Voldemort Native Protocol.
