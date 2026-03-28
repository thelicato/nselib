---
title: "Siemens-SIMATIC-PLC-S7"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Checks for SCADA Siemens <code>Simatic S7</code> devices."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "jpalanco/nmap-scada"
scriptTypes: []
protocols: []
ports: []
usage: ""
outputPreview:
  - "80/tcp  open   http    syn-ack"
  - "|_Siemens-Simatic-S7: SIMATIC 300 (MPI2)/CPU 315-2 PN/DP"
author: "Jose Ramon Palanco, drainware (upstream: jpalanco/nmap-scada)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/jpalanco/nmap-scada/blob/master/Siemens-SIMATIC-PLC-S7.nse"
---

Imported from the upstream repository [jpalanco/nmap-scada](https://github.com/jpalanco/nmap-scada).
Checks for SCADA Siemens <code>Simatic S7</code> devices.
The higher the verbosity or debug level, the more disallowed entries are shown.
