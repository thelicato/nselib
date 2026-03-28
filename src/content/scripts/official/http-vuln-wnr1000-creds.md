---
title: "http-vuln-wnr1000-creds"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
  - "intrusive"
shortDescription: "A vulnerability has been discovered in WNR 1000 series that allows an attacker\nto retrieve administrator credentials with the router interface.\nTested On Firmware Version(s): V1.0.2.60_60.0.86 (Latest) and V1.0.2.54_60.0.82NA"
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script http-vuln-wnr1000-creds <target> -p80"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-vuln-wnr1000-creds:"
  - "|   VULNERABLE:"
  - "|   Netgear WNR1000v3 Credential Harvesting Exploit"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-wnr1000-creds.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-wnr1000-creds.html"
---

A vulnerability has been discovered in WNR 1000 series that allows an attacker
to retrieve administrator credentials with the router interface.
Tested On Firmware Version(s): V1.0.2.60_60.0.86 (Latest) and V1.0.2.54_60.0.82NA
Vulnerability discovered by c1ph04.
