---
title: "afp-ls"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Attempts to get useful information about files from AFP volumes.\nThe output is intended to resemble the output of ls ."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sS -sV -p 548 --script=afp-ls target"
outputPreview:
  - "PORT    STATE SERVICE"
  - "548/tcp open  afp     syn-ack"
  - "| afp-ls:"
  - "|   Information retrieved as patrik"
  - "|   Volume Macintosh HD"
  - "|   maxfiles limit reached (10)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/afp-ls.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/afp-ls.html"
---

Attempts to get useful information about files from AFP volumes.
The output is intended to resemble the output of ls .
