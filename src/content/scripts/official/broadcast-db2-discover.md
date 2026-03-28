---
title: "broadcast-db2-discover"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Attempts to discover DB2 servers on the network by sending a broadcast request to port 523/udp."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script db2-discover"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-db2-discover:"
  - "|   10.0.200.132 (UBU804-DB2E) - IBM DB2 v9.07.0"
  - "|_  10.0.200.119 (EDUSRV011) - IBM DB2 v9.07.0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-db2-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-db2-discover.html"
---

Attempts to discover DB2 servers on the network by sending a broadcast request to port 523/udp.
