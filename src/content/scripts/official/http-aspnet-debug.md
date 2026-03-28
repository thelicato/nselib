---
title: "http-aspnet-debug"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "discovery"
shortDescription: "Determines if a ASP.NET application has debugging enabled using a HTTP DEBUG request."
risk: informational
tags:
  - "vuln"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-aspnet-debug <target>"
outputPreview:
  - "80/tcp open  http    syn-ack"
  - "| http-aspnet-debug:"
  - "|_  status: DEBUG is enabled"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-aspnet-debug.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-aspnet-debug.html"
---

Determines if a ASP.NET application has debugging enabled using a HTTP DEBUG request.
The HTTP DEBUG verb is used within ASP.NET applications to start/stop remote
debugging sessions. The script sends a 'stop-debug' command to determine the
application's current configuration state but access to RPC services is required
 to interact with the debugging session. The request does not change the
application debugging configuration.
