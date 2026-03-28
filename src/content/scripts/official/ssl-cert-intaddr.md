---
title: "ssl-cert-intaddr"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "discovery"
  - "safe"
shortDescription: "Reports any private (RFC1918) IPv4 addresses found in the various fields of\nan SSL service's certificate. These will only be reported if the target\naddress itself is not private. Nmap v7.30 or later is required."
risk: safe
tags:
  - "vuln"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 443 --script ssl-cert-intaddr <target>"
outputPreview:
  - "443/tcp open  https"
  - "| ssl-cert-intaddr:"
  - "|   Subject commonName:"
  - "|     10.5.5.5"
  - "|   Subject organizationName:"
  - "|     10.0.2.1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssl-cert-intaddr.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssl-cert-intaddr.html"
---

Reports any private (RFC1918) IPv4 addresses found in the various fields of
an SSL service's certificate. These will only be reported if the target
address itself is not private. Nmap v7.30 or later is required.
