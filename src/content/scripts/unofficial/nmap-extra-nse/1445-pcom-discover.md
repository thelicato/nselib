---
title: "1445-pcom-discover"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "version"
shortDescription: "Collects device information for Unitronics PLCs via PCOM protocol."
risk: informational
tags:
  - "discovery"
  - "version"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script pcom-discover.nse --script-args='pcom-discover.aggressive=true' -p 20256 <host>"
outputPreview:
  - "PORT      STATE SERVICE"
  - "20256/tcp open  pcom"
  - "| pcom-discover:"
  - "|   master:"
  - "|     Unit ID 3:"
  - "|       Model: V130-33-T38"
author: "Luis Rosa (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1445-pcom-discover.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Collects device information for Unitronics PLCs via PCOM protocol.
PCOM is a protocol to communicate with Unitronics PLCs either by serial or TCP.
See https://unitronicsplc.com/Download/SoftwareUtilities/Unitronics%20PCOM%20Protocol.pdf
