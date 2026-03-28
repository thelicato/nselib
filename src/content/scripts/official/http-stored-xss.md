---
title: "http-stored-xss"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "exploit"
  - "vuln"
shortDescription: "Unfiltered '>' (greater than sign). An indication of potential XSS vulnerability."
risk: intrusive
tags:
  - "intrusive"
  - "exploit"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-stored-xss.nse <target>\n\nThis script works in two phases.\n1) Posts specially crafted strings to every form it encounters.\n2) Crawls through the page searching for these strings.\n\nIf any string is reflected on some page without any proper\nHTML escaping, it's a sign for potential XSS vulnerability."
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-stored-xss:"
  - "|   Found the following stored XSS vulnerabilities:"
  - "|"
  - "|      Payload: ghz>hzx"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-stored-xss.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-stored-xss.html"
---

Unfiltered '>' (greater than sign). An indication of potential XSS vulnerability.
