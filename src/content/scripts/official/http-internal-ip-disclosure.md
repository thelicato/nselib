---
title: "http-internal-ip-disclosure"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "discovery"
  - "safe"
shortDescription: "Determines if the web server leaks its internal IP address when sending\nan HTTP/1.0 request without a Host header."
risk: safe
tags:
  - "vuln"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-internal-ip-disclosure <target>"
outputPreview:
  - "80/tcp open  http    syn-ack"
  - "| http-internal-ip-disclosure:"
  - "|_  Internal IP Leaked: 10.0.0.2"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-internal-ip-disclosure.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-internal-ip-disclosure.html"
---

Determines if the web server leaks its internal IP address when sending
an HTTP/1.0 request without a Host header.
Some misconfigured web servers leak their internal IP address in the response
headers when returning a redirect response. This is a known issue for some
versions of Microsoft IIS, but affects other web servers as well.
If script argument newtargets is set, the script will
add the found IP address as a new target into the scan queue. (See
the documentation for NSE library target for details.)
