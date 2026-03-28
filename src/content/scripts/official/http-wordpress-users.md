---
title: "http-wordpress-users"
source: official
category: "Auth"
categories:
  - "auth"
  - "intrusive"
  - "vuln"
shortDescription: "Enumerates usernames in Wordpress blog/CMS installations by exploiting an\ninformation disclosure vulnerability existing in versions 2.6, 3.1, 3.1.1,\n3.1.3 and 3.2-beta2 and possibly others."
risk: intrusive
tags:
  - "auth"
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-wordpress-users <target>\nnmap -sV --script http-wordpress-users --script-args limit=50 <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-wordpress-users:"
  - "| Username found: admin"
  - "| Username found: mauricio"
  - "| Username found: cesar"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-wordpress-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-wordpress-users.html"
---

Enumerates usernames in Wordpress blog/CMS installations by exploiting an
information disclosure vulnerability existing in versions 2.6, 3.1, 3.1.1,
3.1.3 and 3.2-beta2 and possibly others.
