---
title: "http-vuln-cve2010-2861"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Executes a directory traversal attack against a ColdFusion\nserver and tries to grab the password hash for the administrator user. It\nthen uses the salt value (hidden in the web page) to create the SHA1\nHMAC hash that the web server needs for authentication as admin. You can\npass this value to the ColdFusion server as the admin without cracking\nthe password hash."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-vuln-cve2010-2861 <host>"
outputPreview:
  - "80/tcp open  http"
  - "| http-vuln-cve2010-2861:"
  - "|   VULNERABLE:"
  - "|   Adobe ColdFusion enter.cfm Traversal password.properties Information Disclosure"
  - "|     State: VULNERABLE"
  - "|     IDs:  CVE:CVE-2010-2861  BID:42342"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2010-2861.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2010-2861.html"
---

Executes a directory traversal attack against a ColdFusion
server and tries to grab the password hash for the administrator user. It
then uses the salt value (hidden in the web page) to create the SHA1
HMAC hash that the web server needs for authentication as admin. You can
pass this value to the ColdFusion server as the admin without cracking
the password hash.
