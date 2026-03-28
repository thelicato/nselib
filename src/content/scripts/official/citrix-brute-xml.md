---
title: "citrix-brute-xml"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Attempts to guess valid credentials for the Citrix PN Web Agent XML\nService. The XML service authenticates against the local Windows server\nor the Active Directory."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=citrix-brute-xml --script-args=userdb=<userdb>,passdb=<passdb>,ntdomain=<domain> -p 80,443,8080 <host>"
outputPreview:
  - "PORT     STATE SERVICE    REASON"
  - "8080/tcp open  http-proxy syn-ack"
  - "| citrix-brute-xml:"
  - "|   Joe:password => Must change password at next logon"
  - "|   Luke:summer => Login was successful"
  - "|_  Jane:secret => Account is disabled"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/citrix-brute-xml.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/citrix-brute-xml.html"
---

Attempts to guess valid credentials for the Citrix PN Web Agent XML
Service. The XML service authenticates against the local Windows server
or the Active Directory.
This script makes no attempt of preventing account lockout. If the
password list contains more passwords than the lockout-threshold
accounts will be locked.
