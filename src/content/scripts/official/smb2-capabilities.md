---
title: "smb2-capabilities"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Attempts to list the supported capabilities in a SMBv2 server for each\n enabled dialect."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -p 445 --script smb2-capabilities <target>"
outputPreview:
  - "| smb2-capabilities:"
  - "|   2.0.2:"
  - "|     Distributed File System"
  - "|   2.1:"
  - "|     Distributed File System"
  - "|     Leasing"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb2-capabilities.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb2-capabilities.html"
---

Attempts to list the supported capabilities in a SMBv2 server for each
 enabled dialect.
