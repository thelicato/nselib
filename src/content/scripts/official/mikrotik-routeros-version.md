---
title: "mikrotik-routeros-version"
source: official
category: "Default"
categories:
  - "default"
  - "version"
  - "discovery"
  - "safe"
shortDescription: "Detects MikroTik RouterOS version from devices running the Winbox service on port 8291."
risk: safe
tags:
  - "default"
  - "version"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8291 --script mikrotik-routeros-version <target>"
outputPreview: []
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mikrotik-routeros-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mikrotik-routeros-version.html"
---

Detects MikroTik RouterOS version from devices running the Winbox service on port 8291.
This script attempts to send a specific payload to elicit a response containing the version information.
The provided payload can be used for all RouterOs versions until 6.49.17. Though version 7.1+ are not supported
