---
title: "http-vuln-cve2012-1823"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
  - "intrusive"
shortDescription: "Detects PHP-CGI installations that are vulnerable to CVE-2012-1823, This critical vulnerability allows attackers to retrieve source code and execute code remotely."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "intrusive"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
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
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-vuln-cve2012-1823.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Detects PHP-CGI installations that are vulnerable to CVE-2012-1823, This critical vulnerability allows attackers to retrieve source code and execute code remotely.
The script works by appending "?-s" to the uri to make vulnerable php-cgi handlers return colour syntax highlighted source. We use the pattern "<span style=.*><?" to detect
vulnerable installations.
TODO:
-Improve detection mechanism ( Execute certain payload and look for it in the response to confirm exploitability)
-Add exploitation script
