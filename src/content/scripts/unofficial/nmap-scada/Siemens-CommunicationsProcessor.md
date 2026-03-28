---
title: "Siemens-CommunicationsProcessor"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Checks for SCADA Siemens <code>S7 Communications Processor </code> devices."
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
  - "|_Siemens-CommunicationsProcessor: CP 343-1 CX10"
author: "Jose Ramon Palanco, drainware (upstream: jpalanco/nmap-scada)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/jpalanco/nmap-scada/blob/master/Siemens-CommunicationsProcessor.nse"
---

Imported from the upstream repository [jpalanco/nmap-scada](https://github.com/jpalanco/nmap-scada).
Checks for SCADA Siemens <code>S7 Communications Processor </code> devices.
The higher the verbosity or debug level, the more disallowed entries are shown.
