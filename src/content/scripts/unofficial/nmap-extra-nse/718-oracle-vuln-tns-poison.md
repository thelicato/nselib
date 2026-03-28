---
title: "718-oracle-vuln-tns-poison"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Detects the TNS Poison vulnerability."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap <ip> -p 1521-1523 --script oracle-vuln-tns-poison"
outputPreview:
  - "PORT     STATE SERVICE"
  - "1521/tcp open  oracle"
  - "| oracle-vuln-tns-poison:"
  - "|   VULNERABLE:"
  - "|   The vulnerability allows to intercept traffic between the client and the"
  - "|   Oracle database."
author: "Alexandr Savca (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/718-oracle-vuln-tns-poison.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Detects the TNS Poison vulnerability.
The vulnerability, called TNS Poison (CVE-2012-1675), affects the
component called TNS Listener, which is the responsible of connections
establishment. To exploit the vulnerability no privilege is needed, just
network access to the TNS Listener. The "feature" exploited is enabled by
default in all Oracle versions starting with Oracle 8i and ending with
Oracle 11g.
Reference:
  Oracle Security Alert:
  https://www.oracle.com/technetwork/topics/security/alert-cve-2012-1675-1608180.html
How this can be exploited:
  http://joxeankoret.com/download/tnspoison.pdf
