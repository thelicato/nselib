---
title: "http-breach"
source: unofficial
category: "Default"
categories:
  - "default"
  - "safe"
  - "vuln"
shortDescription: "Attempts to partially detect the BREACH HTTP compression vulnerability (CVE-2013-3587)."
risk: safe
tags:
  - "default"
  - "safe"
  - "vuln"
  - "aerissecure/nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV -p 443 --script http-breach <target>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "443/tcp open  https   syn-ack ttl 45"
  - "| http-breach:"
  - "|   VULNERABLE:"
  - "|   HTTP BREACH vulnerability"
  - "|     State: LIKELY VULNERABLE"
author: "Jeffrey Stiles (@uthcr33p) <jeff()aerissecure com> (upstream: aerissecure/nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/aerissecure/nse/blob/master/http-breach.nse"
---

Imported from the upstream repository [aerissecure/nse](https://github.com/aerissecure/nse).
Attempts to partially detect the BREACH HTTP compression vulnerability (CVE-2013-3587).
The script can only confirm if an HTTPS request successfully completes with a Referer header and that the response uses HTTP compression (gzip, DEFLATE). However, details for additional vulnerability confirmation are provided in the vuln description output.
References:
* http://www.breachattack.com/
* https://blog.qualys.com/ssllabs/2013/08/07/defending-against-the-breach-attack
* https://blog.cloudflare.com/a-solution-to-compression-oracles-on-the-web/
