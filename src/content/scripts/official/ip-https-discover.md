---
title: "ip-https-discover"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "default"
shortDescription: "Checks if the IP over HTTPS (IP-HTTPS) Tunneling Protocol [1] is supported."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "default"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script ip-https-discover"
outputPreview:
  - "443/tcp open  https"
  - "|_ip-https-discover: IP-HTTPS is supported. This indicates that this host supports Microsoft DirectAccess."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ip-https-discover.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ip-https-discover.html"
---

Checks if the IP over HTTPS (IP-HTTPS) Tunneling Protocol [1] is supported.
IP-HTTPS sends Teredo related IPv6 packets over an IPv4-based HTTPS session. This
indicates that Microsoft DirectAccess [2], which allows remote clients to access
intranet resources on a domain basis, is supported. Windows clients need
Windows 7 Enterprise/Ultime or Windows 8.1 Enterprise/Ultimate. Servers need
Windows Server 2008 (R2) or Windows Server 2012 (R2). Older versions
of Windows and Windows Server are not supported.
[1] http://msdn.microsoft.com/en-us/library/dd358571.aspx
[2] http://technet.microsoft.com/en-us/network/dd420463.aspx
