---
title: "http-httpoxy"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "exploit"
  - "intrusive"
shortDescription: "Attempts to detect web applications vulnerable to \"httpoxy\" (CVE-2016-5385, CVE-2016-5386,\nCVE-2016-5387, CVE-2016-5388, CVE-2016-1000109, CVE-2016-1000110)."
risk: intrusive
tags:
  - "vuln"
  - "exploit"
  - "intrusive"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-httpoxy --script-args iterations=5 <target>\nnmap -sV --script http-httpoxy <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack ttl 64"
  - "| http-httpoxy:"
  - "|   VULNERABLE:"
  - "|   HTTPoxy"
  - "|     State: VULNERABLE"
author: "Paulino Calderon <calderon()websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-httpoxy.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to detect web applications vulnerable to "httpoxy" (CVE-2016-5385, CVE-2016-5386,
CVE-2016-5387, CVE-2016-5388, CVE-2016-1000109, CVE-2016-1000110).
The script attempts to detect this vulnerability by measuring the response time when
assigning a non-existing proxy to the headers. In theory, vulnerable applications will try
to connect to the bad proxy increasing the response time. To reduce false positives we run
the test several times and we expect the response time from the request with the bad
proxy to be twice as big to get marked as vulnerable.
References:
* https://httpoxy.org
