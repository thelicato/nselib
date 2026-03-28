---
title: "http-method-tamper"
source: unofficial
category: "Safe"
categories:
  - "safe"
  - "auth"
  - "vuln"
shortDescription: "Attempts to bypass password protected resources (HTTP 401 status) by performing HTTP verb tampering.\nIf an array of paths to check is not set, it will crawl the web server and perform the check against any\npassword protected resource that it finds."
risk: safe
tags:
  - "safe"
  - "auth"
  - "vuln"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script http-method-tamper <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-method-tamper:"
  - "|   VULNERABLE:"
  - "|   Authentication bypass by HTTP verb tampering"
  - "|     State: VULNERABLE (Exploitable)"
author: "Paulino Calderon <calderon()websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-method-tamper.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to bypass password protected resources (HTTP 401 status) by performing HTTP verb tampering.
If an array of paths to check is not set, it will crawl the web server and perform the check against any
password protected resource that it finds.
The script determines if the protected URI is vulnerable by performing HTTP verb tampering and monitoring
 the status codes. First, it uses a HEAD request, then a POST request and finally a random generated string
( This last one is useful when web servers treat unknown request methods as a GET request. This is the case
 for PHP servers ).
If the table <code>paths</code> is set, it will attempt to access the given URIs. Otherwise, a web crawler
is initiated to try to find protected resources. Note that in a PHP environment with .htacess files you need to specify a
path to a file rather than a directory to find misconfigured .htaccess files.
References:
* http://www.imperva.com/resources/glossary/http_verb_tampering.html
* https://www.owasp.org/index.php/Testing_for_HTTP_Methods_and_XST_%28OWASP-CM-008%29
* http://www.mkit.com.ar/labs/htexploit/
* http://capec.mitre.org/data/definitions/274.html
