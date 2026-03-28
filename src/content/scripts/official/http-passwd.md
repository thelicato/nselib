---
title: "http-passwd"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Checks if a web server is vulnerable to directory traversal by attempting to\nretrieve /etc/passwd or \\boot.ini ."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-passwd --script-args http-passwd.root=/test/ <target>"
outputPreview:
  - "80/tcp open  http"
  - "| http-passwd: Directory traversal found."
  - "| Payload: \"index.html?../../../../../boot.ini\""
  - "| Printing first 250 bytes:"
  - "| [boot loader]"
  - "| timeout=30"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-passwd.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-passwd.html"
---

Checks if a web server is vulnerable to directory traversal by attempting to
retrieve /etc/passwd or \boot.ini .
