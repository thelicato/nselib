---
title: "http-slowloris-check"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Tests a web server for vulnerability to the Slowloris DoS attack."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script http-slowloris-check  <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-slowloris-check:"
  - "|   VULNERABLE:"
  - "|   Slowloris DOS attack"
  - "|     State: VULNERABLE"
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/http-slowloris-check.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Tests a web server for vulnerability to the Slowloris DoS attack.
Slowloris was described at Defcon 17 by RSnake
(see http://ha.ckers.org/slowloris/).
This script opens two connections to the server, each without
the final CRLF. After 10 seconds, second connection sends
additional header. Both connections then wait for server timeout.
If second connection gets a timeout 10 or more seconds after the
first one, we can conclude that sending additional header prolonged
it's timeout and that the server is vulnerable to slowloris DoS attack.
Idea from Qualys blogpost:
 * https://community.qualys.com/blogs/securitylabs/2011/07/07/identifying-slow-http-attack-vulnerabilities-on-web-applications
