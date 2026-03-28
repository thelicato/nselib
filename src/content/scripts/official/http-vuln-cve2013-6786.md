---
title: "http-vuln-cve2013-6786"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Detects a URL redirection and reflected XSS vulnerability in Allegro RomPager\nWeb server. The vulnerability has been assigned CVE-2013-6786."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-vuln-cve2013-6786 <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-vuln-cve2013-6786:"
  - "|   VULNERABLE:"
  - "|   URL redirection and reflected XSS vulnerability in Allegro RomPager Web server"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2013-6786.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2013-6786.html"
---

Detects a URL redirection and reflected XSS vulnerability in Allegro RomPager
Web server. The vulnerability has been assigned CVE-2013-6786.
The check is general enough (script tag injection via Referer header) that some
other software may be vulnerable in the same way.
