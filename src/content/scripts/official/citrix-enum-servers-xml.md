---
title: "citrix-enum-servers-xml"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Extracts the name of the server farm and member servers from Citrix XML\nservice."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=citrix-enum-servers-xml -p 80,443,8080 <host>"
outputPreview:
  - "PORT     STATE SERVICE    REASON"
  - "8080/tcp open  http-proxy syn-ack"
  - "| citrix-enum-servers-xml:"
  - "|   CITRIX-SRV01"
  - "|_  CITRIX-SRV01"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/citrix-enum-servers-xml.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/citrix-enum-servers-xml.html"
---

Extracts the name of the server farm and member servers from Citrix XML
service.
