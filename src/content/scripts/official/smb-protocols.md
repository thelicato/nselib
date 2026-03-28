---
title: "smb-protocols"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Attempts to list the supported protocols and dialects of a SMB server."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -p445 --script smb-protocols <target>"
outputPreview:
  - "| smb-protocols:"
  - "|   dialects:"
  - "|     NT LM 0.12 (SMBv1) [dangerous, but default]"
  - "|     2.0.2"
  - "|     2.1"
  - "|     3.0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-protocols.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-protocols.html"
---

Attempts to list the supported protocols and dialects of a SMB server.
The script attempts to initiate a connection using the dialects:

 NT LM 0.12 (SMBv1)

 2.0.2 (SMBv2)

 2.1 (SMBv2)

 3.0 (SMBv3)

 3.0.2 (SMBv3)

 3.1.1 (SMBv3)

Additionally if SMBv1 is found enabled, it will mark it as insecure. This
script is the successor to the (removed) smbv2-enabled script.
