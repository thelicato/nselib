---
title: "http-vuln-exchange"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "exploit"
shortDescription: "Check for Exchange Server CVEs CVE-2021-26855, CVE-2021-26857, CVE-2021-26858 and CVE-2021-27065\nusing Outlook Web App path data."
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
  - "|_http-vuln-proxylogon: (15.1.2176) Exchange 2016 potentially vulnerable, check latest security update is applied (Exchange 2016 CU18 or CU19 installed)"
author: "Kevin Beaumont (upstream: GossiTheDog/scanning)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/GossiTheDog/scanning/blob/main/http-vuln-exchange.nse"
---

Imported from the upstream repository [GossiTheDog/scanning](https://github.com/GossiTheDog/scanning).
Check for Exchange Server CVEs CVE-2021-26855, CVE-2021-26857, CVE-2021-26858 and CVE-2021-27065
using Outlook Web App path data.
Known issues - requires a valid SSL certificate if using SSL/TLS
Originally based on source by onSec-fr and k4nfr3, thanks!
