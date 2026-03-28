---
title: "Siemens-WINCC"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Checks for SCADA Siemens <code>WINCC</code> server."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "jpalanco/nmap-scada"
scriptTypes: []
protocols: []
ports: []
usage: "sudo nmap -sU --script Siemens-WINCC.nse -p137 <host>"
outputPreview:
  - "Host script results:"
  - "| Siemens-WINCC:"
  - "|_  Detected Siemens WINCC_SRV"
author: "Jose Ramon Palanco, drainware (upstream: jpalanco/nmap-scada)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/jpalanco/nmap-scada/blob/master/Siemens-WINCC.nse"
---

Imported from the upstream repository [jpalanco/nmap-scada](https://github.com/jpalanco/nmap-scada).
Checks for SCADA Siemens <code>WINCC</code> server.
The higher the verbosity or debug level, the more disallowed entries are shown.
