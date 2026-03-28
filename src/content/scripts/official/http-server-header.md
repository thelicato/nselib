---
title: "http-server-header"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Uses the HTTP Server header for missing version info. This is currently\ninfeasible with version probes because of the need to match non-HTTP services\ncorrectly."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV <target>"
outputPreview:
  - "PORT   STATE SERVICE VERSION"
  - "80/tcp open  http    Unidentified Server 1.0"
  - "PORT   STATE SERVICE VERSION"
  - "80/tcp open  http    Unidentified Server 1.0"
  - "|_ http-server-header: Unidentified Server 1.0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-server-header.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-server-header.html"
---

Uses the HTTP Server header for missing version info. This is currently
infeasible with version probes because of the need to match non-HTTP services
correctly.
