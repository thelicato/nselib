---
title: "omron-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "version"
shortDescription: "This NSE script is used to send a FINS packet to a remote device. The script\nwill send a Controller Data Read Command and once a response is received, it\nvalidates that it was a proper response to the command that was sent, and then\nwill parse out the data."
risk: informational
tags:
  - "discovery"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script omron-info -sU -p 9600 <host>"
outputPreview:
  - "9600/tcp open  OMRON FINS"
  - "| omron-info:"
  - "|   Controller Model: CJ2M-CPU32          02.01"
  - "|   Controller Version: 02.01"
  - "|   For System Use:"
  - "|   Program Area Size: 20"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/omron-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/omron-info.html"
---

This NSE script is used to send a FINS packet to a remote device. The script
will send a Controller Data Read Command and once a response is received, it
validates that it was a proper response to the command that was sent, and then
will parse out the data.
