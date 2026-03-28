---
title: "ssl-dh-params"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Weak ephemeral Diffie-Hellman parameter detection for SSL/TLS services."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script ssl-dh-params <target>"
outputPreview:
  - "Host script results:"
  - "| ssl-dh-params:"
  - "|   VULNERABLE:"
  - "|   Transport Layer Security (TLS) Protocol DHE_EXPORT Ciphers Downgrade MitM (Logjam)"
  - "|     State: VULNERABLE"
  - "|     IDs:  BID:74733  CVE:CVE-2015-4000"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssl-dh-params.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssl-dh-params.html"
---

Weak ephemeral Diffie-Hellman parameter detection for SSL/TLS services.
This script simulates SSL/TLS handshakes using ciphersuites that have ephemeral
Diffie-Hellman as the key exchange algorithm.
Diffie-Hellman MODP group parameters are extracted and analyzed for vulnerability
to Logjam (CVE 2015-4000) and other weaknesses.
Opportunistic STARTTLS sessions are established on services that support them.
