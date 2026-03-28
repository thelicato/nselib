---
title: "pop3-ntlm-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "This script enumerates information from remote POP3 services with NTLM\nauthentication enabled."
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
usage: "nmap -p 110,995 --script pop3-ntlm-info <target>"
outputPreview:
  - "110/tcp   open     pop3"
  - "| pop3-ntlm-info:"
  - "|   Target_Name: ACTIVEPOP3"
  - "|   NetBIOS_Domain_Name: ACTIVEPOP3"
  - "|   NetBIOS_Computer_Name: POP3-TEST2"
  - "|   DNS_Domain_Name: somedomain.com"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/pop3-ntlm-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/pop3-ntlm-info.html"
---

This script enumerates information from remote POP3 services with NTLM
authentication enabled.
Sending a POP3 NTLM authentication request with null credentials will
cause the remote service to respond with a NTLMSSP message disclosing
information to include NetBIOS, DNS, and OS build version.
