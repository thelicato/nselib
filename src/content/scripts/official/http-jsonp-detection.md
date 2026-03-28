---
title: "http-jsonp-detection"
source: official
category: "Safe"
categories:
  - "safe"
  - "vuln"
  - "discovery"
shortDescription: "Attempts to discover JSONP endpoints in web servers. JSONP endpoints can be\nused to bypass Same-origin Policy restrictions in web browsers."
risk: safe
tags:
  - "safe"
  - "vuln"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 80 --script http-jsonp-detection <target>"
outputPreview:
  - "80/tcp open  http    syn-ack"
  - "| http-jsonp-detection:"
  - "| The following JSONP endpoints were detected:"
  - "|_/rest/contactsjp.php  Completely controllable from URL"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-jsonp-detection.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-jsonp-detection.html"
---

Attempts to discover JSONP endpoints in web servers. JSONP endpoints can be
used to bypass Same-origin Policy restrictions in web browsers.
The script searches for callback functions in the response to detect JSONP
endpoints. It also tries to determine callback function through URL(callback
function may be fully or partially controllable from URL) and also tries to
bruteforce the most common callback variables through the URL.
References : https://securitycafe.ro/2017/01/18/practical-jsonp-injection/
