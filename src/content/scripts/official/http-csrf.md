---
title: "http-csrf"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "exploit"
  - "vuln"
shortDescription: "This script detects Cross Site Request Forgeries (CSRF) vulnerabilities."
risk: intrusive
tags:
  - "intrusive"
  - "exploit"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-csrf.nse <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-csrf:"
  - "| Spidering limited to: maxdepth=3; maxpagecount=20; withinhost=some-very-random-page.com"
  - "|   Found the following CSRF vulnerabilities:"
  - "|"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-csrf.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-csrf.html"
---

This script detects Cross Site Request Forgeries (CSRF) vulnerabilities.
It will try to detect them by checking each form if it contains an unpredictable
token for each user. Without one an attacker may forge malicious requests.
To recognize a token in a form, the script will iterate through the form's
attributes and will search for common patterns in their names. If that fails, it
will also calculate the entropy of each attribute's value. A big entropy means a
possible token.
A common use case for this script comes along with a cookie that gives access
in pages that require authentication, because that's where the privileged
exist. See the http library's documentation to set your own cookie.
