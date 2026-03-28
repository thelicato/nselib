---
title: "cccam-version"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Detects the CCcam service (software for sharing subscription TV among\nmultiple receivers)."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview: []
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/cccam-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/cccam-version.html"
---

Detects the CCcam service (software for sharing subscription TV among
multiple receivers).
The service normally runs on port 12000. It distinguishes
itself by printing 16 random-looking bytes upon receiving a
connection.
Because the script attempts to detect "random-looking" bytes, it has a small
chance of failing to detect the service when the data do not seem random
enough.
