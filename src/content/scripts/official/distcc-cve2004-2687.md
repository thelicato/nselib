---
title: "distcc-cve2004-2687"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "intrusive"
  - "vuln"
shortDescription: "Detects and exploits a remote code execution vulnerability in the distributed\ncompiler daemon distcc. The vulnerability was disclosed in 2002, but is still\npresent in modern implementation due to poor configuration of the service."
risk: intrusive
tags:
  - "exploit"
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 3632 <ip> --script distcc-exec --script-args=\"distcc-exec.cmd='id'\""
outputPreview:
  - "PORT     STATE SERVICE"
  - "3632/tcp open  distccd"
  - "| distcc-exec:"
  - "|   VULNERABLE:"
  - "|   distcc Daemon Command Execution"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/distcc-cve2004-2687.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/distcc-cve2004-2687.html"
---

Detects and exploits a remote code execution vulnerability in the distributed
compiler daemon distcc. The vulnerability was disclosed in 2002, but is still
present in modern implementation due to poor configuration of the service.
