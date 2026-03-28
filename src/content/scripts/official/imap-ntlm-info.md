---
title: "imap-ntlm-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "This script enumerates information from remote IMAP services with NTLM\nauthentication enabled."
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
usage: "nmap -p 143,993 --script imap-ntlm-info <target>"
outputPreview:
  - "143/tcp   open     imap"
  - "| imap-ntlm-info:"
  - "|   Target_Name: ACTIVEIMAP"
  - "|   NetBIOS_Domain_Name: ACTIVEIMAP"
  - "|   NetBIOS_Computer_Name: IMAP-TEST2"
  - "|   DNS_Domain_Name: somedomain.com"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/imap-ntlm-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/imap-ntlm-info.html"
---

This script enumerates information from remote IMAP services with NTLM
authentication enabled.
Sending an IMAP NTLM authentication request with null credentials will
cause the remote service to respond with a NTLMSSP message disclosing
information to include NetBIOS, DNS, and OS build version.
