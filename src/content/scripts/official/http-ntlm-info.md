---
title: "http-ntlm-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "This script enumerates information from remote HTTP services with NTLM\nauthentication enabled."
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
usage: "nmap -p 80 --script http-ntlm-info --script-args http-ntlm-info.root=/root/ <target>"
outputPreview:
  - "80/tcp   open     http"
  - "| http-ntlm-info:"
  - "|   Target_Name: ACTIVEWEB"
  - "|   NetBIOS_Domain_Name: ACTIVEWEB"
  - "|   NetBIOS_Computer_Name: WEB-TEST2"
  - "|   DNS_Domain_Name: somedomain.com"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-ntlm-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-ntlm-info.html"
---

This script enumerates information from remote HTTP services with NTLM
authentication enabled.
By sending a HTTP NTLM authentication request with null domain and user
credentials (passed in the 'Authorization' header), the remote service will
respond with a NTLMSSP message (encoded within the 'WWW-Authenticate' header)
and disclose information to include NetBIOS, DNS, and OS build version if
available.
