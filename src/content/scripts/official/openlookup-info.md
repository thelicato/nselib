---
title: "openlookup-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Parses and displays the banner information of an OpenLookup (network key-value store) server."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 5850 --script openlookup-info <target>"
outputPreview:
  - "5850/tcp open  openlookup"
  - "| openlookup-info:"
  - "|   sync port: 5850"
  - "|   name: Paradise, Arizona"
  - "|   your address: 127.0.0.1:50162"
  - "|   timestamp: 2011-05-21T11:26:07"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/openlookup-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/openlookup-info.html"
---

Parses and displays the banner information of an OpenLookup (network key-value store) server.
