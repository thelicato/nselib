---
title: "http-vuln-cve2011-3368"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Tests for the CVE-2011-3368 (Reverse Proxy Bypass) vulnerability in Apache HTTP server's reverse proxy mode.\nThe script will run 3 tests:\n\n the loopback test, with 3 payloads to handle different rewrite rules\n\n the internal hosts test. According to Contextis, we expect a delay before a server error.\n\n The external website test. This does not mean that you can reach a LAN ip, but this is a relevant issue anyway."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-vuln-cve2011-3368 <targets>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-vuln-cve2011-3368:"
  - "|   VULNERABLE:"
  - "|   Apache mod_proxy Reverse Proxy Security Bypass"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2011-3368.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2011-3368.html"
---

Tests for the CVE-2011-3368 (Reverse Proxy Bypass) vulnerability in Apache HTTP server's reverse proxy mode.
The script will run 3 tests:

 the loopback test, with 3 payloads to handle different rewrite rules

 the internal hosts test. According to Contextis, we expect a delay before a server error.

 The external website test. This does not mean that you can reach a LAN ip, but this is a relevant issue anyway.
