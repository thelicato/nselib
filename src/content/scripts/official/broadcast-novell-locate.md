---
title: "broadcast-novell-locate"
source: official
category: "Broadcast"
categories:
  - "broadcast"
  - "safe"
shortDescription: "Attempts to use the Service Location Protocol to discover Novell NetWare Core Protocol (NCP) servers."
risk: safe
tags:
  - "broadcast"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -sV --script=broadcast-novell-locate <target>"
outputPreview:
  - "Pre-scan script results:"
  - "| broadcast-novell-locate:"
  - "|   Tree name: CQURE-LABTREE"
  - "|   Server name: linux-l84t"
  - "|   Addresses"
  - "|_    192.168.56.33"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/broadcast-novell-locate.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/broadcast-novell-locate.html"
---

Attempts to use the Service Location Protocol to discover Novell NetWare Core Protocol (NCP) servers.
