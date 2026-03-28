---
title: "ssl-heartbleed"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Detects whether a server is vulnerable to the OpenSSL Heartbleed bug (CVE-2014-0160).\nThe code is based on the Python script ssltest.py authored by Katie Stafford (katie@ktpanda.org)"
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 443 --script ssl-heartbleed <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "443/tcp open  https"
  - "| ssl-heartbleed:"
  - "|   VULNERABLE:"
  - "|   The Heartbleed Bug is a serious vulnerability in the popular OpenSSL cryptographic software library. It allows for stealing information intended to be protected by SSL/TLS encryption."
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssl-heartbleed.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssl-heartbleed.html"
---

Detects whether a server is vulnerable to the OpenSSL Heartbleed bug (CVE-2014-0160).
The code is based on the Python script ssltest.py authored by Katie Stafford (katie@ktpanda.org)
