---
title: "ssl-heartbleed-dump"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Detects whether a server is vulnerable to the OpenSSL Heartbleed bug (CVE-2014-0160).\nThe code is based on the Python script ssltest.py authored by Jared Stafford (jspenguin@jspenguin.org)."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "takeshixx/nmap-scripts"
scriptTypes: []
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
author: "Patrik Karlsson <patrik@cqure.net> (upstream: takeshixx/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/takeshixx/nmap-scripts/blob/master/ssl-heartbleed-dump.nse"
---

Imported from the upstream repository [takeshixx/nmap-scripts](https://github.com/takeshixx/nmap-scripts).
Detects whether a server is vulnerable to the OpenSSL Heartbleed bug (CVE-2014-0160).
The code is based on the Python script ssltest.py authored by Jared Stafford (jspenguin@jspenguin.org).
Provide -d flag for a dump of leaked memory.
