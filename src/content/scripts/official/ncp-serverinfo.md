---
title: "ncp-serverinfo"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Retrieves eDirectory server information (OS version, server name,\nmounts, etc.) from the Novell NetWare Core Protocol (NCP) service."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "524/tcp open  ncp"
  - "| ncp-serverinfo:"
  - "|   Server name: LINUX-L84T"
  - "|   Tree Name: IIT-LABTREE"
  - "|   OS Version: 5.70 (rev 7)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ncp-serverinfo.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ncp-serverinfo.html"
---

Retrieves eDirectory server information (OS version, server name,
mounts, etc.) from the Novell NetWare Core Protocol (NCP) service.
