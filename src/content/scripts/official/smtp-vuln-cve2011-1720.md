---
title: "smtp-vuln-cve2011-1720"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Checks for a memory corruption in the Postfix SMTP server when it uses\nCyrus SASL library authentication mechanisms (CVE-2011-1720). This\nvulnerability can allow denial of service and possibly remote code\nexecution."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=smtp-vuln-cve2011-1720 --script-args='smtp.domain=<domain>' -pT:25,465,587 <host>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "25/tcp open  smtp"
  - "| smtp-vuln-cve2011-1720:"
  - "|   VULNERABLE:"
  - "|   Postfix SMTP server Cyrus SASL Memory Corruption"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smtp-vuln-cve2011-1720.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smtp-vuln-cve2011-1720.html"
---

Checks for a memory corruption in the Postfix SMTP server when it uses
Cyrus SASL library authentication mechanisms (CVE-2011-1720). This
vulnerability can allow denial of service and possibly remote code
execution.
