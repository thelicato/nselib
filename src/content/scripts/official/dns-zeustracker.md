---
title: "dns-zeustracker"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
  - "external"
  - "malware"
shortDescription: "Checks if the target IP range is part of a Zeus botnet by querying ZTDNS @ abuse.ch.\nPlease review the following information before you start to scan:\n\n https://zeustracker.abuse.ch/ztdns.php"
risk: safe
tags:
  - "safe"
  - "discovery"
  - "external"
  - "malware"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -sn -PN --script=dns-zeustracker <ip>"
outputPreview:
  - "Host script results:"
  - "| dns-zeustracker:"
  - "|   Name                IP        SBL         ASN    Country  Status   Level               Files Online  Date added"
  - "|   foo.example.com     1.2.3.4   SBL123456   1234   CN       online   Bulletproof hosted  0             2011-06-17"
  - "|_  bar.example.com     1.2.3.5   SBL123456   1234   CN       online   Bulletproof hosted  0             2011-06-15"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-zeustracker.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-zeustracker.html"
---

Checks if the target IP range is part of a Zeus botnet by querying ZTDNS @ abuse.ch.
Please review the following information before you start to scan:

 https://zeustracker.abuse.ch/ztdns.php
