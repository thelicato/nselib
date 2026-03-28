---
title: "modbus-discover"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Enumerates SCADA Modbus slave ids (sids) and collects their device information."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script modbus-discover.nse --script-args='modbus-discover.aggressive=true' -p 502 <host>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "502/tcp open  modbus"
  - "| modbus-discover:"
  - "|   sid 0x64:"
  - "|     Slave ID data: \\xFA\\xFFPM710PowerMeter"
  - "|     Device identification: Schneider Electric PM710 v03.110"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/modbus-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/modbus-discover.html"
---

Enumerates SCADA Modbus slave ids (sids) and collects their device information.
Modbus is one of the popular SCADA protocols. This script does Modbus device
information disclosure. It tries to find legal sids (slave ids) of Modbus
devices and to get additional information about the vendor and firmware. This
script is improvement of modscan python utility written by Mark Bristow.
