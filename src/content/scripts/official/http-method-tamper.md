---
title: "http-method-tamper"
source: official
category: "Auth"
categories:
  - "auth"
  - "vuln"
shortDescription: "Attempts to bypass password protected resources (HTTP 401 status) by performing HTTP verb tampering.\nIf an array of paths to check is not set, it will crawl the web server and perform the check against any\npassword protected resource that it finds."
risk: informational
tags:
  - "auth"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
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
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-method-tamper.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-method-tamper.html"
---

Attempts to bypass password protected resources (HTTP 401 status) by performing HTTP verb tampering.
If an array of paths to check is not set, it will crawl the web server and perform the check against any
password protected resource that it finds.
The script determines if the protected URI is vulnerable by performing HTTP verb tampering and monitoring
 the status codes. First, it uses a HEAD request, then a POST request and finally a random generated string
( This last one is useful when web servers treat unknown request methods as a GET request. This is the case
 for PHP servers ).
If the table paths is set, it will attempt to access the given URIs. Otherwise, a web crawler
is initiated to try to find protected resources. Note that in a PHP environment with .htaccess files you need to specify a
path to a file rather than a directory to find misconfigured .htaccess files.
