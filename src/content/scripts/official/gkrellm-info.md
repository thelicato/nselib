---
title: "gkrellm-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Queries a GKRellM service for monitoring information. A single round of\ncollection is made, showing a snapshot of information at the time of the\nrequest."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 19150 <ip> --script gkrellm-info"
outputPreview:
  - "PORT      STATE SERVICE"
  - "19150/tcp open  gkrellm"
  - "| gkrellm-info:"
  - "|   Hostname: ubu1110"
  - "|   System: Linux 3.0.0-12-generic"
  - "|   Version: gkrellmd 2.3.4"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/gkrellm-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/gkrellm-info.html"
---

Queries a GKRellM service for monitoring information. A single round of
collection is made, showing a snapshot of information at the time of the
request.
