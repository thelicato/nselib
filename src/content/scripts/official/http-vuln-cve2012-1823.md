---
title: "http-vuln-cve2012-1823"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
  - "intrusive"
shortDescription: "Detects PHP-CGI installations that are vulnerable to CVE-2012-1823, This\ncritical vulnerability allows attackers to retrieve source code and execute\ncode remotely."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script http-vuln-cve2012-1823 <target>\nnmap -p80 --script http-vuln-cve2012-1823 --script-args http-vuln-cve2012-1823.uri=/test.php <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-vuln-cve2012-1823:"
  - "|   VULNERABLE:"
  - "|   PHP-CGI Remote code execution and source code disclosure"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2012-1823.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2012-1823.html"
---

Detects PHP-CGI installations that are vulnerable to CVE-2012-1823, This
critical vulnerability allows attackers to retrieve source code and execute
code remotely.
The script works by appending "?-s" to the uri to make vulnerable php-cgi
handlers return colour syntax highlighted source. We use the pattern "<span
style=.*><?" to detect
vulnerable installations.
