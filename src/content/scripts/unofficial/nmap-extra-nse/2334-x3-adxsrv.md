---
title: "2334-x3-adxsrv"
source: unofficial
category: "Safe"
categories:
  - "safe"
  - "vuln"
shortDescription: "Checks if an X3 AdxSrv service is present and vulnerable to a directory disclosure\nvulnerability."
risk: safe
tags:
  - "safe"
  - "vuln"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 50000 --script x3-adxsrv.nse <target>"
outputPreview:
  - "50000/tcp open"
  - "|x3-adxsrv-vuln: VULNERABLE"
  - "|_Directory returned-> C:\\Sage\\SafeX3\\AdxAdmin"
author: "@deadjakk (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/2334-x3-adxsrv.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Checks if an X3 AdxSrv service is present and vulnerable to a directory disclosure
vulnerability.
