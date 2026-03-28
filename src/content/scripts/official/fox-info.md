---
title: "fox-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "version"
shortDescription: "Tridium Niagara Fox is a protocol used within Building Automation Systems. Based\noff Billy Rios and Terry McCorkle's work this Nmap NSE will collect information\nfrom A Tridium Niagara system."
risk: informational
tags:
  - "discovery"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script fox-info.nse -p 1911 <host>"
outputPreview:
  - "1911/tcp open  Niagara Fox"
  - "| fox-info:"
  - "|   fox.version: 1.0.1"
  - "|   hostName: xpvm-0omdc01xmy"
  - "|   hostAddress: 192.168.1.1"
  - "|   app.name: Workbench"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/fox-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/fox-info.html"
---

Tridium Niagara Fox is a protocol used within Building Automation Systems. Based
off Billy Rios and Terry McCorkle's work this Nmap NSE will collect information
from A Tridium Niagara system.
http://digitalbond.com
