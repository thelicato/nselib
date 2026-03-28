---
title: "rtsp-methods"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Determines which methods are supported by the RTSP (real time streaming protocol) server."
risk: safe
tags:
  - "default"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 554 --script rtsp-methods <ip>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "554/tcp open  rtsp"
  - "| rtsp-methods:"
  - "|_  DESCRIBE, SETUP, PLAY, TEARDOWN, OPTIONS"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rtsp-methods.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rtsp-methods.html"
---

Determines which methods are supported by the RTSP (real time streaming protocol) server.
