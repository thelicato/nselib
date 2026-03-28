---
title: "realvnc-auth-bypass"
source: official
category: "Auth"
categories:
  - "auth"
  - "safe"
  - "vuln"
shortDescription: "Checks if a VNC server is vulnerable to the RealVNC authentication bypass\n(CVE-2006-2369)."
risk: safe
tags:
  - "auth"
  - "safe"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=realvnc-auth-bypass <target>"
outputPreview:
  - "PORT     STATE SERVICE VERSION"
  - "5900/tcp open  vnc     VNC (protocol 3.8)"
  - "| realvnc-auth-bypass:"
  - "|   VULNERABLE:"
  - "|   RealVNC 4.1.0 - 4.1.1 Authentication Bypass"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/realvnc-auth-bypass.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/realvnc-auth-bypass.html"
---

Checks if a VNC server is vulnerable to the RealVNC authentication bypass
(CVE-2006-2369).
