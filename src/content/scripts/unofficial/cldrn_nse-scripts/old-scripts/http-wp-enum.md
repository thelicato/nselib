---
title: "http-wp-enum"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "auth"
  - "intrusive"
  - "vuln"
shortDescription: "http-wp-enum enumerates usernames in Wordpress installations by exploiting an information disclosure vulnerability\nexisting in versions 2.6, 3.1, 3.1.1, 3.1.3 and 3.2-beta2 and possibly others."
risk: intrusive
tags:
  - "discovery"
  - "auth"
  - "intrusive"
  - "vuln"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-wp-enum <target>\nnmap -sV --script http-wp-enum --script-args limit=50 <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-wp-enum:"
  - "| Username found: admin"
  - "| Username found: mauricio"
  - "| Username found: cesar"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-wp-enum.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
http-wp-enum enumerates usernames in Wordpress installations by exploiting an information disclosure vulnerability
existing in versions 2.6, 3.1, 3.1.1, 3.1.3 and 3.2-beta2 and possibly others.
Original advisory:
* http://www.talsoft.com.ar/index.php/research/security-advisories/wordpress-user-id-and-user-name-disclosure
