---
title: "wsdd-discover"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
  - "default"
shortDescription: "Retrieves and displays information from devices supporting the Web\nServices Dynamic Discovery (WS-Discovery) protocol. It also attempts\nto locate any published Windows Communication Framework (WCF) web\nservices (.NET 4.0 or later)."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "default"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "sudo ./nmap --script wsdd-discover"
outputPreview:
  - "PORT     STATE         SERVICE"
  - "3702/udp open|filtered unknown"
  - "| wsdd-discover:"
  - "|   Devices"
  - "|     Message id: 39a2b7f2-fdbd-690c-c7c9-deadbeefceb3"
  - "|     Address: http://10.0.200.116:50000"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/wsdd-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/wsdd-discover.html"
---

Retrieves and displays information from devices supporting the Web
Services Dynamic Discovery (WS-Discovery) protocol. It also attempts
to locate any published Windows Communication Framework (WCF) web
services (.NET 4.0 or later).
