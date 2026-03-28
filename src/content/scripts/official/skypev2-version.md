---
title: "skypev2-version"
source: official
category: "Version"
categories:
  - "version"
shortDescription: "Detects the Skype version 2 service."
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
  - "80/tcp open  skype2  Skype"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/skypev2-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/skypev2-version.html"
---

Detects the Skype version 2 service.
