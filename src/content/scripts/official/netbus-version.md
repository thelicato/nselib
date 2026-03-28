---
title: "netbus-version"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Extends version detection to detect NetBuster, a honeypot service\nthat mimes NetBus."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -p 12345 --script netbus-version <target>"
outputPreview:
  - "12345/tcp open  netbus  Netbuster (honeypot)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/netbus-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/netbus-version.html"
---

Extends version detection to detect NetBuster, a honeypot service
that mimes NetBus.
