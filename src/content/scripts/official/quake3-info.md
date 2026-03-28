---
title: "quake3-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Extracts information from a Quake3 game server and other games which use the same protocol."
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
usage: "nmap -sU -sV -Pn --script quake3-info.nse -p <port> <target>"
outputPreview:
  - "PORT      STATE         SERVICE VERSION"
  - "27960/udp open          quake3  Quake 3 dedicated server"
  - "| quake3-info:"
  - "| PLAYERS:"
  - "|     1. cyberix (frags: 0/20, ping: 4)"
  - "| BASIC OPTIONS:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/quake3-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/quake3-info.html"
---

Extracts information from a Quake3 game server and other games which use the same protocol.
