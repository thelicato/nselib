---
title: "http-vuln-cve2010-0738"
source: official
category: "Safe"
categories:
  - "safe"
  - "auth"
  - "vuln"
shortDescription: "Tests whether a JBoss target is vulnerable to jmx console authentication bypass (CVE-2010-0738)."
risk: safe
tags:
  - "safe"
  - "auth"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-vuln-cve2010-0738 --script-args 'http-vuln-cve2010-0738.paths={/path1/,/path2/}' <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-vuln-cve2010-0738:"
  - "|_  /jmx-console/: Authentication bypass."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2010-0738.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2010-0738.html"
---

Tests whether a JBoss target is vulnerable to jmx console authentication bypass (CVE-2010-0738).
It works by checking if the target paths require authentication or redirect to a login page that could be
bypassed via a HEAD request. RFC 2616 specifies that the HEAD request should be treated exactly like GET but
with no returned response body. The script also detects if the URL does not require authentication at all.
