---
title: "http-vuln-cve2014-8877"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
  - "exploit"
shortDescription: "Exploits a remote code injection vulnerability (CVE-2014-8877) in Wordpress CM\nDownload Manager plugin. Versions <= 2.0.0 are known to be affected."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "exploit"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-vuln-cve2014-8877 --script-args http-vuln-cve2014-8877.cmd=\"whoami\",http-vuln-cve2014-8877.uri=\"/wordpress\" <target>\nnmap --script http-vuln-cve2014-8877 <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-vuln-cve2014-8877:"
  - "|   VULNERABLE:"
  - "|   Code Injection in Wordpress CM Download Manager plugin"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2014-8877.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2014-8877.html"
---

Exploits a remote code injection vulnerability (CVE-2014-8877) in Wordpress CM
Download Manager plugin. Versions <= 2.0.0 are known to be affected.
CM Download Manager plugin does not correctly sanitise the user input which
allows remote attackers to execute arbitrary PHP code via the CMDsearch
parameter to cmdownloads/, which is processed by the PHP 'create_function'
function.
The script injects PHP system() function into the vulnerable target in order to
execute specified shell command.
