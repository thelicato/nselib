---
title: "stun-version"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Sends a binding request to the server and attempts to extract version\ninformation from the response, if the server attribute is present."
risk: informational
tags:
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -sV -p 3478 <target>"
outputPreview:
  - "PORT     STATE SERVICE VERSION"
  - "3478/udp open  stun    Vovida.org 0.96"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/stun-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/stun-version.html"
---

Sends a binding request to the server and attempts to extract version
information from the response, if the server attribute is present.
