---
title: "socks-auth-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "default"
shortDescription: "Determines the supported authentication mechanisms of a remote SOCKS\nproxy server. Starting with SOCKS version 5 socks servers may support\nauthentication. The script checks for the following authentication\ntypes:\n 0 - No authentication\n 1 - GSSAPI\n 2 - Username and password"
risk: safe
tags:
  - "discovery"
  - "safe"
  - "default"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 1080 <ip> --script socks-auth-info"
outputPreview:
  - "PORT     STATE SERVICE"
  - "1080/tcp open  socks"
  - "| socks-auth-info:"
  - "|   No authentication"
  - "|_  Username and password"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/socks-auth-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/socks-auth-info.html"
---

Determines the supported authentication mechanisms of a remote SOCKS
proxy server. Starting with SOCKS version 5 socks servers may support
authentication. The script checks for the following authentication
types:
 0 - No authentication
 1 - GSSAPI
 2 - Username and password
