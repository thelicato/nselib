---
title: "smtp-vuln-cve2011-1764"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Checks for a format string vulnerability in the Exim SMTP server\n(version 4.70 through 4.75) with DomainKeys Identified Mail (DKIM) support\n(CVE-2011-1764). The DKIM logging mechanism did not use format string\nspecifiers when logging some parts of the DKIM-Signature header field.\nA remote attacker who is able to send emails, can exploit this vulnerability\nand execute arbitrary code with the privileges of the Exim daemon."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=smtp-vuln-cve2011-1764 -pT:25,465,587 <host>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "25/tcp open  smtp"
  - "| smtp-vuln-cve2011-1764:"
  - "|   VULNERABLE:"
  - "|   Exim DKIM format string"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smtp-vuln-cve2011-1764.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smtp-vuln-cve2011-1764.html"
---

Checks for a format string vulnerability in the Exim SMTP server
(version 4.70 through 4.75) with DomainKeys Identified Mail (DKIM) support
(CVE-2011-1764). The DKIM logging mechanism did not use format string
specifiers when logging some parts of the DKIM-Signature header field.
A remote attacker who is able to send emails, can exploit this vulnerability
and execute arbitrary code with the privileges of the Exim daemon.
