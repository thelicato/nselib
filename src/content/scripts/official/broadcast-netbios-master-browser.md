---
title: "broadcast-netbios-master-browser"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Attempts to discover master browsers and the domains they manage."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script=broadcast-netbios-master-browser"
outputPreview:
  - "| broadcast-netbios-master-browser:"
  - "| ip            server        domain"
  - "|_10.0.200.156  WIN2K3-EPI-1  WORKGROUP"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-netbios-master-browser.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-netbios-master-browser.html"
---

Attempts to discover master browsers and the domains they manage.
