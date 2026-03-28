---
title: "rdp-enum-encryption"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Determines which Security layer and Encryption level is supported by the\nRDP service. It does so by cycling through all existing protocols and ciphers.\nWhen run in debug mode, the script also returns the protocols and ciphers that\nfail and any errors that were reported."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 3389 --script rdp-enum-encryption <ip>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "3389/tcp open  ms-wbt-server"
  - "|   Security layer"
  - "|     CredSSP (NLA): SUCCESS"
  - "|     CredSSP with Early User Auth: SUCCESS"
  - "|     Native RDP: SUCCESS"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rdp-enum-encryption.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rdp-enum-encryption.html"
---

Determines which Security layer and Encryption level is supported by the
RDP service. It does so by cycling through all existing protocols and ciphers.
When run in debug mode, the script also returns the protocols and ciphers that
fail and any errors that were reported.
The script was inspired by MWR's RDP Cipher Checker
 http://labs.mwrinfosecurity.com/tools/2009/01/12/rdp-cipher-checker/
