---
title: "http-sec-headers"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "vuln"
shortDescription: "Makes a request to the root folder (\"/\") of a web server and reports on the security headers that are missing from the data. This script mimics the functionality of https://securityheaders.io and is modeled after http-headers.nse."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "vuln"
  - "aerissecure/nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script http-sec-headers <target>"
outputPreview:
  - "443/tcp open  https   syn-ack"
  - "| http-sec-headers:"
  - "|   missing:"
  - "|     Content-Security-Policy"
  - "|     Permissions-Policy"
  - "|     Expect-CT"
author: "Jeffrey Stiles (upstream: aerissecure/nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/aerissecure/nse/blob/master/http-sec-headers.nse"
---

Imported from the upstream repository [aerissecure/nse](https://github.com/aerissecure/nse).
Makes a request to the root folder ("/") of a web server and reports on the security headers that are missing from the data. This script mimics the functionality of https://securityheaders.io and is modeled after http-headers.nse.
