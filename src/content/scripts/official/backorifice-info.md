---
title: "backorifice-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Connects to a BackOrifice service and gathers information about\nthe host and the BackOrifice service itself."
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
usage: "nmap --script backorifice-info <target> --script-args backorifice-info.password=<password>"
outputPreview:
  - "31337/udp open|filtered BackOrifice"
  - "| backorifice-info:"
  - "|   PING REPLY"
  - "|     !PONG!1.20!HAL9000!"
  - "|   SYSTEM INFO"
  - "|     System info for machine 'HAL9000'"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/backorifice-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/backorifice-info.html"
---

Connects to a BackOrifice service and gathers information about
the host and the BackOrifice service itself.
The extracted host information includes basic system setup, list
of running processes, network resources and shares.
Information about the service includes enabled port redirections,
listening console applications and a list of BackOrifice plugins
installed with the service.
