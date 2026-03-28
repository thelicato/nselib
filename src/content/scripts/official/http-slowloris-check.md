---
title: "http-slowloris-check"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Tests a web server for vulnerability to the Slowloris DoS attack without\nactually launching a DoS attack."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-slowloris-check  <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-slowloris-check:"
  - "|   VULNERABLE:"
  - "|   Slowloris DOS attack"
  - "|     State: LIKELY VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-slowloris-check.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-slowloris-check.html"
---

Tests a web server for vulnerability to the Slowloris DoS attack without
actually launching a DoS attack.
Slowloris was described at Defcon 17 by RSnake
(see http://ha.ckers.org/slowloris/ ).
This script opens two connections to the server, each without the final CRLF.
After 10 seconds, second connection sends additional header. Both connections
then wait for server timeout. If second connection gets a timeout 10 or more
seconds after the first one, we can conclude that sending additional header
prolonged its timeout and that the server is vulnerable to slowloris DoS
attack.
A "LIKELY VULNERABLE" result means a server is subject to timeout-extension
attack, but depending on the http server's architecture and resource limits, a
full denial-of-service is not always possible. Complete testing requires
triggering the actual DoS condition and measuring server responsiveness.
You can specify custom http User-agent field with http.useragent
script argument.
