---
title: "http-sap-netweaver-leak"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Detects SAP Netweaver Portal instances that allow anonymous access to the\n KM unit navigation page. This page leaks file names, ldap users, etc."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 80 --script http-sap-netweaver-leak <target>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "443/tcp open  https   syn-ack"
  - "| http-sap-netweaver-leak:"
  - "|   VULNERABLE:"
  - "|   Anonymous access to SAP Netweaver Portal"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-sap-netweaver-leak.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-sap-netweaver-leak.html"
---

Detects SAP Netweaver Portal instances that allow anonymous access to the
 KM unit navigation page. This page leaks file names, ldap users, etc.
SAP Netweaver Portal with the Knowledge Management Unit enable allows unauthenticated
users to list file system directories through the URL '/irj/go/km/navigation?Uri=/'.
This issue has been reported and won't be fixed.
