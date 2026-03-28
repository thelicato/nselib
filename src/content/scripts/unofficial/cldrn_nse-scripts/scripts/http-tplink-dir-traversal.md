---
title: "http-tplink-dir-traversal"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "exploit"
shortDescription: "Exploits a directory traversal vulnerability existing in several TP-Link wireless routers. Attackers may exploit this vulnerability to read any of the configuration and password files remotely and without authentication."
risk: intrusive
tags:
  - "vuln"
  - "exploit"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
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
author: "Paulino Calderon <calderon()websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-tplink-dir-traversal.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Exploits a directory traversal vulnerability existing in several TP-Link wireless routers. Attackers may exploit this vulnerability to read any of the configuration and password files remotely and without authentication.
This vulnerability was confirmed in models WR740N, WR740ND and WR2543ND but there are several models that use the same HTTP server so I believe they could be vulnerable as well. I appreciate
any help confirming the vulnerability in other models.
Advisory:
* http://websec.ca/advisories/view/path-traversal-vulnerability-tplink-wdr740
Other interesting files:
* /tmp/topology.cnf (Wireless configuration)
* /tmp/ath0.ap_bss (Wireless encryption key)
