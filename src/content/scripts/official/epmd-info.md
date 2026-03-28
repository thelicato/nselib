---
title: "epmd-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Connects to Erlang Port Mapper Daemon (epmd) and retrieves a list of nodes with their respective port numbers."
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
usage: "nmap -p 4369 --script epmd-info <target>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "4369/tcp open  epmd"
  - "| epmd-info.nse:"
  - "|   epmd_port: 4369"
  - "|   nodes:"
  - "|     rabbit: 36804"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/epmd-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/epmd-info.html"
---

Connects to Erlang Port Mapper Daemon (epmd) and retrieves a list of nodes with their respective port numbers.
