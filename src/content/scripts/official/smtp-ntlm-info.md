---
title: "smtp-ntlm-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "This script enumerates information from remote SMTP services with NTLM\nauthentication enabled."
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
usage: "nmap -p 25,465,587 --script smtp-ntlm-info --script-args smtp-ntlm-info.domain=domain.com <target>"
outputPreview:
  - "25/tcp   open     smtp"
  - "| smtp-ntlm-info:"
  - "|   Target_Name: ACTIVESMTP"
  - "|   NetBIOS_Domain_Name: ACTIVESMTP"
  - "|   NetBIOS_Computer_Name: SMTP-TEST2"
  - "|   DNS_Domain_Name: somedomain.com"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smtp-ntlm-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smtp-ntlm-info.html"
---

This script enumerates information from remote SMTP services with NTLM
authentication enabled.
Sending a SMTP NTLM authentication request with null credentials will
cause the remote service to respond with a NTLMSSP message disclosing
information to include NetBIOS, DNS, and OS build version.
