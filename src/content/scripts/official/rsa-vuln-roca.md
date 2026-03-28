---
title: "rsa-vuln-roca"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Detects RSA keys vulnerable to Return Of Coppersmith Attack (ROCA) factorization."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 22,443 --script rsa-vuln-roca <target>"
outputPreview: []
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rsa-vuln-roca.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rsa-vuln-roca.html"
---

Detects RSA keys vulnerable to Return Of Coppersmith Attack (ROCA) factorization.
SSH hostkeys and SSL/TLS certificates are checked. The checks require recent updates to the openssl NSE library.
