---
title: "http-security-headers"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Checks for the HTTP response headers related to security given in OWASP Secure Headers Project\nand gives a brief description of the header and its configuration value."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p <port> --script http-security-headers <target>"
outputPreview:
  - "80/tcp open  http    syn-ack"
  - "| http-security-headers:"
  - "|   Strict_Transport_Security:"
  - "|     Header: Strict-Transport-Security: max-age=15552000; preload"
  - "|   Public_Key_Pins_Report_Only:"
  - "|     Header: Public-Key-Pins-Report-Only: max-age=500; pin-sha256=\"WoiWRyIOVNa9ihaBciRSC7XHjliYS9VwUGOIud4PB18=\"; pin-sha256=\"r/mIkG3eEpVdm+u/ko/cwxzOMo1bk4TyHIlByibiA5E=\"; pin-sha256=\"q4PO2G2cbkZhZ82+JgmRUyGMoAeozA+BSXVXQWB8XWQ=\"; report-uri=\"http://reports.fb.com/hpkp/\""
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-security-headers.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-security-headers.html"
---

Checks for the HTTP response headers related to security given in OWASP Secure Headers Project
and gives a brief description of the header and its configuration value.
The script requests the server for the header with http.head and parses it to list headers founds with their
configurations. The script checks for HSTS(HTTP Strict Transport Security), HPKP(HTTP Public Key Pins),
X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, Content-Security-Policy,
X-Permitted-Cross-Domain-Policies, Set-Cookie, Expect-CT, Cache-Control, Pragma and Expires.
References: https://www.owasp.org/index.php/OWASP_Secure_Headers_Project
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
