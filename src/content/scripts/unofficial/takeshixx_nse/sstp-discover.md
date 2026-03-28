---
title: "sstp-discover"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "default"
shortDescription: "Check if the Secure Socket Tunneling Protocol is supported. This is\naccomplished by trying to establish the HTTPS layer which is used to\ncarry SSTP traffic as described in:\n    - http://msdn.microsoft.com/en-us/library/cc247364.aspx"
risk: informational
tags:
  - "discovery"
  - "default"
  - "takeshixx/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: ""
outputPreview:
  - "443/tcp open  https"
  - "|_sstp-discover: SSTP is supported."
author: "Niklaus Schiess <nschiess@adversec.com> (upstream: takeshixx/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/takeshixx/nmap-scripts/blob/master/sstp-discover.nse"
---

Imported from the upstream repository [takeshixx/nmap-scripts](https://github.com/takeshixx/nmap-scripts).
Check if the Secure Socket Tunneling Protocol is supported. This is
accomplished by trying to establish the HTTPS layer which is used to
carry SSTP traffic as described in:
    - http://msdn.microsoft.com/en-us/library/cc247364.aspx
Current SSTP server implementations:
    - Microsoft Windows (Server 2008/Server 2012)
    - MikroTik RouterOS
    - SEIL (http://www.seil.jp)
