---
title: "http-vuln-cve2017-5689"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "auth"
  - "exploit"
shortDescription: "Detects if a system with Intel Active Management Technology is vulnerable to the INTEL-SA-00075\nprivilege escalation vulnerability (CVE2017-5689)."
risk: intrusive
tags:
  - "vuln"
  - "auth"
  - "exploit"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 16992 --script http-vuln-cve2017-5689 <target>"
outputPreview:
  - "PORT      STATE SERVICE       REASON"
  - "16992/tcp open  amt-soap-http syn-ack"
  - "| http-vuln-cve2017-5689:"
  - "|   VULNERABLE:"
  - "|   Intel Active Management Technology INTEL-SA-00075 Authentication Bypass"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2017-5689.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2017-5689.html"
---

Detects if a system with Intel Active Management Technology is vulnerable to the INTEL-SA-00075
privilege escalation vulnerability (CVE2017-5689).
This script determines if a target is vulnerable by attempting to perform digest authentication
with a blank response parameter. If the authentication succeeds, a HTTP 200 response is received.
