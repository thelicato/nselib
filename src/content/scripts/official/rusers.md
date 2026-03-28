---
title: "rusers"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Connects to rusersd RPC service and retrieves a list of logged-in users."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=rusers <target>"
outputPreview:
  - "| USER     ON        FROM  SINCE                IDLE"
  - "| LOGIN    console         2015-11-08T12:03:50  8h55m58s"
  - "| root     console   :0    2015-11-08T12:06:49  8h55m58s"
  - "| root     pts/2     :0.0  2015-11-08T12:07:06  2d02h51m48s"
  - "| .telnet  /dev/pts        2016-03-14T12:07:46  24855d03h14m07s"
  - "| .telnet  /dev/pts        2016-03-14T10:25:09  24855d03h14m07s"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rusers.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rusers.html"
---

Connects to rusersd RPC service and retrieves a list of logged-in users.
