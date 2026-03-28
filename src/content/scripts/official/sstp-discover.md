---
title: "sstp-discover"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "default"
  - "safe"
shortDescription: "Check if the Secure Socket Tunneling Protocol is supported. This is\naccomplished by trying to establish the HTTPS layer which is used to\ncarry SSTP traffic as described in:\n - http://msdn.microsoft.com/en-us/library/cc247364.aspx"
risk: safe
tags:
  - "discovery"
  - "default"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "443/tcp open  https"
  - "|_sstp-discover: SSTP is supported."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/sstp-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/sstp-discover.html"
---

Check if the Secure Socket Tunneling Protocol is supported. This is
accomplished by trying to establish the HTTPS layer which is used to
carry SSTP traffic as described in:
 - http://msdn.microsoft.com/en-us/library/cc247364.aspx
Current SSTP server implementations:
 - Microsoft Windows (Server 2008/Server 2012)
 - MikroTik RouterOS
 - SEIL ( http://www.seil.jp )
