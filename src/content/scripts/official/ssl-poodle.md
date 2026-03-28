---
title: "ssl-poodle"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Checks whether SSLv3 CBC ciphers are allowed (POODLE)"
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --version-light --script ssl-poodle -p 443 <host>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "443/tcp open  https   syn-ack"
  - "| ssl-poodle:"
  - "|   VULNERABLE:"
  - "|   SSL POODLE information leak"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssl-poodle.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssl-poodle.html"
---

Checks whether SSLv3 CBC ciphers are allowed (POODLE)
Run with -sV to use Nmap's service scan to detect SSL/TLS on non-standard
ports. Otherwise, ssl-poodle will only run on ports that are commonly used for
SSL.
POODLE is CVE-2014-3566. All implementations of SSLv3 that accept CBC
ciphersuites are vulnerable. For speed of detection, this script will stop
after the first CBC ciphersuite is discovered. If you want to enumerate all CBC
ciphersuites, you can use Nmap's own ssl-enum-ciphers to do a full audit of
your TLS ciphersuites.
