---
title: "http-vuln-cve2015-1427"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
shortDescription: "This script attempts to detect a vulnerability, CVE-2015-1427, which allows attackers\n to leverage features of this API to gain unauthenticated remote code execution (RCE)."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-vuln-cve2015-1427 --script-args command= 'ls' <targets>"
outputPreview:
  - "| http-vuln-cve2015-1427:"
  - "|   VULNERABLE:"
  - "|   ElasticSearch CVE-2015-1427 RCE Exploit"
  - "|     State: VULNERABLE (Exploitable)"
  - "|     IDs:  CVE:CVE-2015-1427"
  - "|     Risk factor: High  CVSS2: 7.5"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2015-1427.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2015-1427.html"
---

This script attempts to detect a vulnerability, CVE-2015-1427, which allows attackers
 to leverage features of this API to gain unauthenticated remote code execution (RCE).
Elasticsearch versions 1.3.0-1.3.7 and 1.4.0-1.4.2 have a vulnerability in the Groovy scripting engine.
 The vulnerability allows an attacker to construct Groovy scripts that escape the sandbox and execute shell
 commands as the user running the Elasticsearch Java VM.
