---
title: "rdp-ntlm-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "This script enumerates information from remote RDP services with CredSSP\n(NLA) authentication enabled."
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
usage: "nmap -p 3389 --script rdp-ntlm-info <target>"
outputPreview:
  - "3389/tcp open     ms-wbt-server syn-ack ttl 128 Microsoft Terminal Services"
  - "| rdp-ntlm-info:"
  - "|   Target_Name: W2016"
  - "|   NetBIOS_Domain_Name: W2016"
  - "|   NetBIOS_Computer_Name: W16GA-SRV01"
  - "|   DNS_Domain_Name: W2016.lab"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rdp-ntlm-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rdp-ntlm-info.html"
---

This script enumerates information from remote RDP services with CredSSP
(NLA) authentication enabled.
Sending an incomplete CredSSP (NTLM) authentication request with null credentials
will cause the remote service to respond with a NTLMSSP message disclosing
information to include NetBIOS, DNS, and OS build version.
