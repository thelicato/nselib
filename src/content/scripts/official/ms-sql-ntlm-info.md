---
title: "ms-sql-ntlm-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "This script enumerates information from remote Microsoft SQL services with NTLM\nauthentication enabled."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 1433 --script ms-sql-ntlm-info <target>"
outputPreview:
  - "1433/tcp   open     ms-sql-s"
  - "| ms-sql-ntlm-info:"
  - "|   Target_Name: ACTIVESQL"
  - "|   NetBIOS_Domain_Name: ACTIVESQL"
  - "|   NetBIOS_Computer_Name: DB-TEST2"
  - "|   DNS_Domain_Name: somedomain.com"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ms-sql-ntlm-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ms-sql-ntlm-info.html"
---

This script enumerates information from remote Microsoft SQL services with NTLM
authentication enabled.
Sending a MS-TDS NTLM authentication request with an invalid domain and null
credentials will cause the remote service to respond with a NTLMSSP message
disclosing information to include NetBIOS, DNS, and OS build version.
