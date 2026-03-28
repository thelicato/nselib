---
title: "http-qnap-nas-info"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Attempts to retrieve the model, firmware version, and enabled services from a\nQNAP Network Attached Storage (NAS) device."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-qnap-nas-info -p <port> <host>"
outputPreview:
  - "PORT   STATE SERVICE   REASON"
  - "443/tcp open  https   syn-ack"
  - "| http-qnap-nas-info:"
  - "|   Device Model: TS-859"
  - "|   Firmware Version: 3.2.5"
  - "|   Firmware Build: 0410T"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-qnap-nas-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-qnap-nas-info.html"
---

Attempts to retrieve the model, firmware version, and enabled services from a
QNAP Network Attached Storage (NAS) device.
