---
title: "weblogic-t3-info"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "discovery"
  - "version"
shortDescription: "Detect the T3 RMI protocol and Weblogic version"
risk: safe
tags:
  - "default"
  - "safe"
  - "discovery"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "|_weblogic-t3-info: T3 protocol in use (WebLogic version: 12.1.2)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/weblogic-t3-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/weblogic-t3-info.html"
---

Detect the T3 RMI protocol and Weblogic version
