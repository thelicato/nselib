---
title: "nntp-ntlm-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "This script enumerates information from remote NNTP services with NTLM\nauthentication enabled."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 119,433,563 --script nntp-ntlm-info <target>"
outputPreview:
  - "119/tcp   open     nntp"
  - "| nntp-ntlm-info:"
  - "|   Target_Name: ACTIVENNTP"
  - "|   NetBIOS_Domain_Name: ACTIVENNTP"
  - "|   NetBIOS_Computer_Name: NNTP-TEST2"
  - "|   DNS_Domain_Name: somedomain.com"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nntp-ntlm-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nntp-ntlm-info.html"
---

This script enumerates information from remote NNTP services with NTLM
authentication enabled.
Sending an MS-NNTP NTLM authentication request with null credentials will
cause the remote service to respond with a NTLMSSP message disclosing
information to include NetBIOS, DNS, and OS build version.
