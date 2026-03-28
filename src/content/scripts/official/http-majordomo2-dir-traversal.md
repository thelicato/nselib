---
title: "http-majordomo2-dir-traversal"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
  - "exploit"
shortDescription: "Exploits a directory traversal vulnerability existing in Majordomo2 to retrieve remote files. (CVE-2011-0049)."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "exploit"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-majordomo2-dir-traversal <host/ip>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http    syn-ack"
  - "| http-majordomo2-dir-traversal: /etc/passwd was found:"
  - "|"
  - "| root:x:0:0:root:/root:/bin/bash"
  - "| bin:x:1:1:bin:/bin:/sbin/nologin"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-majordomo2-dir-traversal.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-majordomo2-dir-traversal.html"
---

Exploits a directory traversal vulnerability existing in Majordomo2 to retrieve remote files. (CVE-2011-0049).
Vulnerability originally discovered by Michael Brooks.
