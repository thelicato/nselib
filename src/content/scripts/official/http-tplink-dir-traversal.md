---
title: "http-tplink-dir-traversal"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "exploit"
shortDescription: "Exploits a directory traversal vulnerability existing in several TP-Link\nwireless routers. Attackers may exploit this vulnerability to read any of the\nconfiguration and password files remotely and without authentication."
risk: intrusive
tags:
  - "vuln"
  - "exploit"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-tplink-dir-traversal.nse <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-tplink-dir-traversal:"
  - "|   VULNERABLE:"
  - "|   Path traversal vulnerability in several TP-Link wireless routers"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-tplink-dir-traversal.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-tplink-dir-traversal.html"
---

Exploits a directory traversal vulnerability existing in several TP-Link
wireless routers. Attackers may exploit this vulnerability to read any of the
configuration and password files remotely and without authentication.
This vulnerability was confirmed in models WR740N, WR740ND and WR2543ND but
there are several models that use the same HTTP server so I believe they could
be vulnerable as well. I appreciate any help confirming the vulnerability in
other models.
