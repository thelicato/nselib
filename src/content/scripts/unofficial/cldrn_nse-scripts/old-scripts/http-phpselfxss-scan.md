---
title: "http-phpselfxss-scan"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
shortDescription: "Crawls a web server looking for PHP files vulnerable to PHP_SELF cross site scripting vulnerabilities."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-phpself-xss --script-args 'http-phpself-xss.path=/sillyapp/' <host/ip>\nIt's important you don't forget the last / if you're setting a path"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-phpself-xss: Possible PHPSELF XSS: http://calder0n.com/sillyapp/1.php/%27%22/%3E%3Cscript%3Ealert(1)%3C/script%3E"
  - "|_Possible PHPSELF XSS: http://calder0n.com/sillyapp/three.php/%27%22/%3E%3Cscript%3Ealert(1)%3C/script%3E"
  - "-"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-phpselfxss-scan.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Crawls a web server looking for PHP files vulnerable to PHP_SELF cross site scripting vulnerabilities.
This script crawls the webserver to create a list of PHP files and then sends an attack vector/probe to all of them to identify PHP_SELF cross site scripting vulnerabilities.
PHP_SELF XSS refers to cross site scripting vulnerabilities caused by the lack of sanitation of the variable <code>$_SERVER["PHP_SELF"]</code> in PHP scripts. This variable is
commonly used in php scripts with forms and a lot of developers out there think it's safe to print it without escaping it first.
Examples of Cross Site Scripting vulnerabilities in the variable $_SERVER[PHP_SELF]:
*http://www.securityfocus.com/bid/37351
*http://software-security.sans.org/blog/2011/05/02/spot-vuln-percentage
The attack vector/probe used is: <code>/'"/><script>alert(1)</script></code>
You may test this script against http://calder0n.com/sillyapp/
