---
title: "smb-vuln-webexec"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "A critical remote code execution vulnerability exists in WebExService (WebExec)."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script smb-vuln-webexec --script-args smbusername=<username>,smbpass=<password> -p445 <host>"
outputPreview:
  - "PORT    STATE SERVICE      REASON"
  - "445/tcp open  microsoft-ds syn-ack"
  - "| smb-vuln-webexec:"
  - "|   VULNERABLE:"
  - "|   Remote Code Execution vulnerability in WebExService"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-vuln-webexec.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-vuln-webexec.html"
---

A critical remote code execution vulnerability exists in WebExService (WebExec).
