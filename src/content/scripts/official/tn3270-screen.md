---
title: "tn3270-screen"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Connects to a tn3270 'server' and returns the screen."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script tn3270-info,tn3270_screen <host>"
outputPreview:
  - "PORT     STATE  SERVICE         VERSION"
  - "23/tcp   open   tn3270          Telnet TN3270"
  - "| tn3270-screen:"
  - "|  screen:"
  - "|  Mainframe Operating System                              z/OS V1.6"
  - "|          FFFFF  AAA  N   N      DDDD  EEEEE      ZZZZZ H   H  III"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/tn3270-screen.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/tn3270-screen.html"
---

Connects to a tn3270 'server' and returns the screen.
Hidden fields will be listed below the screen with (row, col) coordinates.
