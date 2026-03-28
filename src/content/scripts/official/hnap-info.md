---
title: "hnap-info"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
  - "default"
  - "version"
shortDescription: "Retrieve hardwares details and configuration information utilizing HNAP, the \"Home Network Administration Protocol\".\nIt is an HTTP-Simple Object Access Protocol (SOAP)-based protocol which allows for remote topology discovery,\nconfiguration, and management of devices (routers, cameras, PCs, NAS, etc.)"
risk: safe
tags:
  - "safe"
  - "discovery"
  - "default"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script hnap-info -p80,8080 <target>"
outputPreview:
  - "PORT     STATE SERVICE    REASON"
  - "8080/tcp open  http-proxy syn-ack"
  - "| hnap-info:"
  - "|   Type: GatewayWithWiFi"
  - "|   Device: Ingraham"
  - "|   Vendor: Linksys"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hnap-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hnap-info.html"
---

Retrieve hardwares details and configuration information utilizing HNAP, the "Home Network Administration Protocol".
It is an HTTP-Simple Object Access Protocol (SOAP)-based protocol which allows for remote topology discovery,
configuration, and management of devices (routers, cameras, PCs, NAS, etc.)
