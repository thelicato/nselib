---
title: "smb2-security-mode"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
  - "default"
shortDescription: "Determines the message signing configuration in SMBv2 servers\n for all supported dialects."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "default"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -p 445 --script smb2-security-mode <target>"
outputPreview:
  - "| smb2-security-mode:"
  - "|   3.1.1:"
  - "|_    Message signing enabled but not required"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb2-security-mode.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb2-security-mode.html"
---

Determines the message signing configuration in SMBv2 servers
 for all supported dialects.
The script sends a SMB2_COM_NEGOTIATE request for each SMB2/SMB3 dialect
 and parses the security mode field to determine the message signing
 configuration of the SMB server.
