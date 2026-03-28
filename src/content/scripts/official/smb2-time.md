---
title: "smb2-time"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "default"
shortDescription: "Attempts to obtain the current system date and the start date of a SMB2 server."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "default"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -p445 --script smb2-time <target>"
outputPreview:
  - "Host script results:"
  - "| smb2-time:"
  - "|   date: 2017-07-28 03:06:34"
  - "|_  start_date: 2017-07-20 09:29:49"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb2-time.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb2-time.html"
---

Attempts to obtain the current system date and the start date of a SMB2 server.
