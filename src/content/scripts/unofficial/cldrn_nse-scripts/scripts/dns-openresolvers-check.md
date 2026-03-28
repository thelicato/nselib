---
title: "dns-openresolvers-check"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "external"
shortDescription: "dns-openresolvers-check looks up the database \"dnsbl.openresolvers.org\" to detect DNS servers known to allow open recursion. If the DNS server is found, it will be marked as vulnerable as it can be abused via DNS amplification attacks."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "external"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script dns-openresolvers-check <target>"
outputPreview:
  - "| dns-openresolvers-check:"
  - "|   VULNERABLE:"
  - "|   This DNS server has been blacklisted as an open resolver."
  - "|     State: VULNERABLE"
  - "|     Risk factor: High"
  - "|     Description:"
author: "Paulino Calderon <calderon@websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/dns-openresolvers-check.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
dns-openresolvers-check looks up the database "dnsbl.openresolvers.org" to detect DNS servers known to allow open recursion. If the DNS server is found, it will be marked as vulnerable as it can be abused via DNS amplification attacks.
This script queries a database provided by http://dns.measurement-factory.com.
Daily reports of open resolvers found:
* http://dns.measurement-factory.com/surveys/openresolvers/ASN-reports/
DNS aplification attacks:
* http://isotf.org/news/DNS-Amplification-Attacks.pdf
