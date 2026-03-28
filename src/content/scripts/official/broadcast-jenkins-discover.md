---
title: "broadcast-jenkins-discover"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "broadcast"
  - "safe"
shortDescription: "Discovers Jenkins servers on a LAN by sending a discovery broadcast probe."
risk: safe
tags:
  - "discovery"
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-jenkins-discover"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-jenkins:"
  - "|   Version: 2.60.2; Server ID: d5e31b7a9d69cf3c89cc799c23199760; Slave Port: 35928"
  - "|_  Version: 2.60.2; Server ID: b98e8e1b862c3eecb14e8be0028cf4ee; Slave Port: 45435"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-jenkins-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-jenkins-discover.html"
---

Discovers Jenkins servers on a LAN by sending a discovery broadcast probe.
