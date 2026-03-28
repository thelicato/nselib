---
title: "ajp-auth"
source: official
category: "Default"
categories:
  - "default"
  - "auth"
  - "safe"
shortDescription: "Retrieves the authentication scheme and realm of an AJP service (Apache JServ Protocol) that requires authentication."
risk: safe
tags:
  - "default"
  - "auth"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 8009 <ip> --script ajp-auth [--script-args ajp-auth.path=/login]"
outputPreview:
  - "PORT     STATE SERVICE"
  - "8009/tcp open  ajp13"
  - "| ajp-auth:"
  - "|_  Digest opaque=GPui3SvCGBoHrRMMzSsgaYBV qop=auth nonce=1336063830612:935b5b389696b0f67b9193e19f47e037 realm=example.org"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ajp-auth.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ajp-auth.html"
---

Retrieves the authentication scheme and realm of an AJP service (Apache JServ Protocol) that requires authentication.
