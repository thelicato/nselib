---
title: "http-auth"
source: official
category: "Default"
categories:
  - "default"
  - "auth"
  - "safe"
shortDescription: "Retrieves the authentication scheme and realm of a web service that requires\nauthentication."
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
usage: "nmap --script http-auth [--script-args http-auth.path=/login] -p80 <host>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-auth:"
  - "| HTTP/1.1 401 Unauthorized"
  - "|   Negotiate"
  - "|   NTLM"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-auth.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-auth.html"
---

Retrieves the authentication scheme and realm of a web service that requires
authentication.
