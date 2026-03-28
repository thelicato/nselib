---
title: "broadcast-versant-locate"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Discovers Versant object databases using the broadcast srvloc protocol."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script broadcast-versant-locate"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-versant-locate:"
  - "|_  vod://192.168.200.222:5019"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-versant-locate.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-versant-locate.html"
---

Discovers Versant object databases using the broadcast srvloc protocol.
