---
title: "http-cross-domain-policy"
source: official
category: "Safe"
categories:
  - "safe"
  - "external"
  - "vuln"
shortDescription: "Checks the cross-domain policy file (/crossdomain.xml) and the client-acces-policy file (/clientaccesspolicy.xml)\nin web applications and lists the trusted domains. Overly permissive settings enable Cross Site Request Forgery\nattacks and may allow attackers to access sensitive data. This script is useful to detect permissive\nconfigurations and possible domain names available for purchase to exploit the application."
risk: safe
tags:
  - "safe"
  - "external"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-cross-domain-policy <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "8080/tcp open  http-proxy syn-ack"
  - "| http-cross-domain-policy:"
  - "|   VULNERABLE:"
  - "|   Cross-domain policy file (crossdomain.xml)"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-cross-domain-policy.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-cross-domain-policy.html"
---

Checks the cross-domain policy file (/crossdomain.xml) and the client-acces-policy file (/clientaccesspolicy.xml)
in web applications and lists the trusted domains. Overly permissive settings enable Cross Site Request Forgery
attacks and may allow attackers to access sensitive data. This script is useful to detect permissive
configurations and possible domain names available for purchase to exploit the application.
The script queries instantdomainsearch.com to lookup the domains. This functionality is
turned off by default, to enable it set the script argument http-cross-domain-policy.domain-lookup.
