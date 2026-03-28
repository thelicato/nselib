---
title: "irc-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Gathers information from an IRC server."
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
  - "6665/tcp open     irc"
  - "| irc-info:"
  - "|   server: asimov.freenode.net"
  - "|   version: ircd-seven-1.1.3(20111112-b71671d1e846,charybdis-3.4-dev). asimov.freenode.net"
  - "|   servers: 31"
  - "|   ops: 36"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/irc-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/irc-info.html"
---

Gathers information from an IRC server.
It uses STATS, LUSERS, and other queries to obtain this information.
