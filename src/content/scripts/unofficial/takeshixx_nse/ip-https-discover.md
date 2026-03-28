---
title: "ip-https-discover"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "default"
shortDescription: "IP-HTTPS sends Teredo related IPv6 packets over an IPv4-based HTTPS session."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "default"
  - "takeshixx/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script ip-https-discover"
outputPreview:
  - "443/tcp open  https"
  - "|_ip-https-discover: IP-HTTPS is supported. This indicates that this host supports Microsoft DirectAccess."
author: "Niklaus Schiess <nschiess@adversec.com> (upstream: takeshixx/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/takeshixx/nmap-scripts/blob/master/ip-https-discover.nse"
---

Imported from the upstream repository [takeshixx/nmap-scripts](https://github.com/takeshixx/nmap-scripts).
IP-HTTPS sends Teredo related IPv6 packets over an IPv4-based HTTPS session.
Checks if the IP over HTTPS (IP-HTTPS) Tunneling Protocol [1] is supported. This
indicates that Microsoft DirectAccess [2], which allows remote clients to access
intranet resources on a domain basis, is supported. Windows clients need
Windows 7 Enterprise/Ultime or Windows 8.1 Enterprise/Ultimate. Servers need
Windows Server 2008 (R2) or Windows Server 2012 (R2). Older versions
of Windows and Windows Server are not supported.
[1] http://msdn.microsoft.com/en-us/library/dd358571.aspx
[2] http://technet.microsoft.com/en-us/network/dd420463.aspx
