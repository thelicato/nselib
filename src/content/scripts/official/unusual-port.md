---
title: "unusual-port"
source: official
category: "Safe"
categories:
  - "safe"
shortDescription: "Compares the detected service on a port against the expected service for that\nport number (e.g. ssh on 22, http on 80) and reports deviations. The script\nrequires that a version scan has been run in order to be able to discover what\nservice is actually running on each port."
risk: safe
tags:
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script unusual-port <ip>"
outputPreview:
  - "23/tcp open   ssh     OpenSSH 5.8p1 Debian 7ubuntu1 (protocol 2.0)"
  - "|_unusual-port: ssh unexpected on port tcp/23"
  - "25/tcp open   smtp    Postfix smtpd"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/unusual-port.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/unusual-port.html"
---

Compares the detected service on a port against the expected service for that
port number (e.g. ssh on 22, http on 80) and reports deviations. The script
requires that a version scan has been run in order to be able to discover what
service is actually running on each port.
