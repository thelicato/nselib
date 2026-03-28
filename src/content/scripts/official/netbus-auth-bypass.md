---
title: "netbus-auth-bypass"
source: official
category: "Auth"
categories:
  - "auth"
  - "safe"
  - "vuln"
shortDescription: "Checks if a NetBus server is vulnerable to an authentication bypass\nvulnerability which allows full access without knowing the password."
risk: safe
tags:
  - "auth"
  - "safe"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 12345 --script netbus-auth-bypass <target>"
outputPreview:
  - "12345/tcp open  netbus"
  - "|_netbus-auth-bypass: Vulnerable"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/netbus-auth-bypass.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/netbus-auth-bypass.html"
---

Checks if a NetBus server is vulnerable to an authentication bypass
vulnerability which allows full access without knowing the password.
For example a server running on TCP port 12345 on localhost with
this vulnerability is accessible to anyone. An attacker could
simply form a connection to the server ( ncat -C 127.0.0.1 12345 )
and login to the service by typing Password;1; into the console.
