---
title: "http-phpself-xss"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
  - "vuln"
shortDescription: "Crawls a web server looking for PHP files that use the variable $_SERVER[\"PHP_SELF\"] unsafely."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "vuln"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=http-phpself-xss -p80 <target>\nnmap -sV --script http-self-xss <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-phpself-xss:"
  - "|   VULNERABLE:"
  - "|   Unsafe use of $_SERVER[\"PHP_SELF\"] in PHP files"
  - "|     State: VULNERABLE (Exploitable)"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-phpself-xss.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Crawls a web server looking for PHP files that use the variable $_SERVER["PHP_SELF"] unsafely.
This script crawls the webserver to create a list of PHP files and then sends an attack vector/probe to identify PHP_SELF cross site scripting vulnerabilities.
PHP_SELF XSS refers to reflected cross site scripting vulnerabilities caused by the lack of sanitation of the variable <code>$_SERVER["PHP_SELF"]</code> in PHP scripts. This variable is
commonly used in php scripts with forms and when the current URI is needed.
Examples of Cross Site Scripting vulnerabilities in the variable $_SERVER[PHP_SELF]:
*http://www.securityfocus.com/bid/37351
*http://software-security.sans.org/blog/2011/05/02/spot-vuln-percentage
*http://websec.ca/advisories/view/xss-vulnerabilities-mantisbt-1.2.x
The attack vector/probe used is: <code>/'"/><script>alert(1)</script></code>
