---
title: "openflow-info"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Queries OpenFlow controllers for information. Newer versions of the OpenFlow\nprotocol (1.3 and greater) will return a list of all protocol versions supported\nby the controller. Versions prior to 1.3 only return their own version number."
risk: safe
tags:
  - "default"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 6633,6653 --script openflow-info <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "6653/tcp open  openflow"
  - "| openflow-info:"
  - "|   OpenFlow Running Version: 1.5.X"
  - "|   OpenFlow Versions Supported:"
  - "|     1.0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/openflow-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/openflow-info.html"
---

Queries OpenFlow controllers for information. Newer versions of the OpenFlow
protocol (1.3 and greater) will return a list of all protocol versions supported
by the controller. Versions prior to 1.3 only return their own version number.
