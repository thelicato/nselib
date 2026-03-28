---
title: "pcworx-info"
source: official
category: "Discovery"
categories:
  - "discovery"
shortDescription: "This NSE script will query and parse pcworx protocol to a remote PLC.\nThe script will send a initial request packets and once a response is received,\nit validates that it was a proper response to the command that was sent, and then\nwill parse out the data. PCWorx is a protocol and Program by Phoenix Contact."
risk: informational
tags:
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script pcworx-info -p 1962 <host>"
outputPreview:
  - "| pcworx-info:"
  - "|   PLC Type: ILC 330 ETH"
  - "|   Model Number: 2737193"
  - "|   Firmware Version: 3.95T"
  - "|   Firmware Date: Mar  2 2012"
  - "|_  Firmware Time: 09:39:02"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/pcworx-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/pcworx-info.html"
---

This NSE script will query and parse pcworx protocol to a remote PLC.
The script will send a initial request packets and once a response is received,
it validates that it was a proper response to the command that was sent, and then
will parse out the data. PCWorx is a protocol and Program by Phoenix Contact.
http://digitalbond.com
