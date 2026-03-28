---
title: "http-vuln-cve2017-8917"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
shortDescription: "An SQL Injection vulnerability affecting Joomla! 3.7.x before 3.7.1 allows for\nunauthenticated users to execute arbitrary SQL commands. This vulnerability was\ncaused by a new component, com_fields , which was introduced in\nversion 3.7. This component is publicly accessible, which means this can be\nexploited by any malicious individual visiting the site."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-vuln-cve2017-8917 -p 80 <target>"
outputPreview:
  - "PORT   STATE SERVICE VERSION"
  - "80/tcp open  http    Apache httpd 2.4.7 ((Ubuntu))"
  - "| http-vuln-cve2017-8917:"
  - "|   VULNERABLE:"
  - "|   Joomla! 3.7.0 'com_fields' SQL Injection Vulnerability"
  - "|       State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2017-8917.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2017-8917.html"
---

An SQL Injection vulnerability affecting Joomla! 3.7.x before 3.7.1 allows for
unauthenticated users to execute arbitrary SQL commands. This vulnerability was
caused by a new component, com_fields , which was introduced in
version 3.7. This component is publicly accessible, which means this can be
exploited by any malicious individual visiting the site.
The script attempts to inject an SQL statement that runs the user()
information function on the target website. A successful injection will return
the current MySQL user name and host name in the extra_info table.
This script is based on a Python script written by brianwrf.
