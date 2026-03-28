---
title: "http-vuln-exchange-proxyshell"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "exploit"
shortDescription: "Check for Exchange Server CVE-2021-34473\nby trying to access OWA as NT AUTHORITY\\SYSTEM\nKnown issues - requires a valid SSL certificate if using SSL/TLS"
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "exploit"
  - "gossithedog/scanning"
scriptTypes: []
protocols: []
ports: []
usage: ""
outputPreview:
  - "PORT    STATE SERVICE"
  - "443/tcp open  https"
  - "|_http-vuln-exchange-proxyshell: ** Vulnerable to ProxyShell SSRPF **"
author: "Kevin Beaumont (upstream: GossiTheDog/scanning)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/GossiTheDog/scanning/blob/main/http-vuln-exchange-proxyshell.nse"
---

Imported from the upstream repository [GossiTheDog/scanning](https://github.com/GossiTheDog/scanning).
Check for Exchange Server CVE-2021-34473
by trying to access OWA as NT AUTHORITY\SYSTEM
Known issues - requires a valid SSL certificate if using SSL/TLS
