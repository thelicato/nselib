---
title: "tftp-version"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "version"
shortDescription: "Obtains information (such as vendor and device type where available) from a\nTFTP service by requesting a random filename. Software vendor information is\ndetermined by matching the error message against a database of known software."
risk: safe
tags:
  - "default"
  - "safe"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 69 --script tftp-version"
outputPreview:
  - "69/udp open  tftp"
  - "| tftp-version:"
  - "|   d: printer"
  - "|_  p: Brother printer tftpd"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/tftp-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/tftp-version.html"
---

Obtains information (such as vendor and device type where available) from a
TFTP service by requesting a random filename. Software vendor information is
determined by matching the error message against a database of known software.
