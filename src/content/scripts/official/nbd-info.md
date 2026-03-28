---
title: "nbd-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Displays protocol and block device information from NBD servers."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 10809 --script nbd-info <target>"
outputPreview:
  - "PORT      STATE SERVICE REASON"
  - "10809/tcp open  nbd     syn-ack"
  - "| nbd-info:"
  - "|   Protocol:"
  - "|     Negotiation: fixed newstyle"
  - "|     SSL/TLS Wrapped: false"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nbd-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nbd-info.html"
---

Displays protocol and block device information from NBD servers.
The Network Block Device protocol is used to publish block devices
over TCP. This script connects to an NBD server and attempts to pull
down a list of exported block devices and their details
