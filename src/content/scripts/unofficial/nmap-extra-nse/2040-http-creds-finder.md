---
title: "2040-http-creds-finder"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "This script will spider a website and look for any sensitive API Keys or secrets"
risk: safe
tags:
  - "discovery"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=http-creds-finder <TARGET> -p443"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "-443/tcp open  https   syn-ack ttl 128"
  - "-| http-creds-finder:"
  - "-|   VULNERABLE:"
  - "-|   Sensitive Data: MYSQL_DATABASE_NAME"
  - "-|     State: VULNERABLE"
author: "Jason Ostrom (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/2040-http-creds-finder.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
This script will spider a website and look for any sensitive API Keys or secrets
