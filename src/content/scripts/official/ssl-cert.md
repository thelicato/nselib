---
title: ssl-cert
source: official
category: TLS
shortDescription: Retrieves certificate details from TLS services, including subject names, dates, and alternative names.
risk: safe
tags:
  - tls
  - ssl
  - certificates
protocols:
  - tcp
ports:
  - "443"
  - "8443"
usage: nmap -p443,8443 --script ssl-cert <target>
outputPreview:
  - "Subject: commonName=portal.example.com"
  - "Not valid after: 2026-11-15T23:59:59"
author: Nmap Project
lastReviewed: "2026-03-27"
---

`ssl-cert` surfaces certificate metadata that is often useful for asset identification, expiry checks, and hostname validation.

It is a lightweight way to confirm what a TLS endpoint is presenting before moving into broader certificate or cipher analysis.
