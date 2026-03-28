---
title: "telnet-ntlm-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "This script enumerates information from remote Microsoft Telnet services with NTLM\nauthentication enabled."
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
usage: "nmap -p 23 --script telnet-ntlm-info <target>"
outputPreview:
  - "23/tcp   open     telnet"
  - "| telnet-ntlm-info:"
  - "|   Target_Name: ACTIVETELNET"
  - "|   NetBIOS_Domain_Name: ACTIVETELNET"
  - "|   NetBIOS_Computer_Name: HOST-TEST2"
  - "|   DNS_Domain_Name: somedomain.com"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/telnet-ntlm-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/telnet-ntlm-info.html"
---

This script enumerates information from remote Microsoft Telnet services with NTLM
authentication enabled.
Sending a MS-TNAP NTLM authentication request with null credentials will cause the
remote service to respond with a NTLMSSP message disclosing information to include
NetBIOS, DNS, and OS build version.
