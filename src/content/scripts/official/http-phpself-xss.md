---
title: "http-phpself-xss"
source: official
category: "Fuzzer"
categories:
  - "fuzzer"
  - "intrusive"
  - "vuln"
shortDescription: "Crawls a web server and attempts to find PHP files vulnerable to reflected\ncross site scripting via the variable $_SERVER[\"PHP_SELF\"] ."
risk: intrusive
tags:
  - "fuzzer"
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
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
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-phpself-xss.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-phpself-xss.html"
---

Crawls a web server and attempts to find PHP files vulnerable to reflected
cross site scripting via the variable $_SERVER["PHP_SELF"] .
This script crawls the webserver to create a list of PHP files and then sends
an attack vector/probe to identify PHP_SELF cross site scripting
vulnerabilities. PHP_SELF XSS refers to reflected cross site scripting
vulnerabilities caused by the lack of sanitation of the variable
 $_SERVER["PHP_SELF"] in PHP scripts. This variable is commonly
used in PHP scripts that display forms and when the script file name is
needed.
Examples of Cross Site Scripting vulnerabilities in the variable $_SERVER[PHP_SELF]:

 http://www.securityfocus.com/bid/37351

 http://software-security.sans.org/blog/2011/05/02/spot-vuln-percentage

 http://websec.ca/advisories/view/xss-vulnerabilities-mantisbt-1.2.x

The attack vector/probe used is: /'"/><script>alert(1)</script>
