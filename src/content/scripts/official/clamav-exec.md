---
title: "clamav-exec"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Exploits ClamAV servers vulnerable to unauthenticated clamav comand execution."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script clamav-exec <target>\nnmap --script clamav-exec --script-args cmd='scan',scandb='files.txt' <target>\nnmap --script clamav-exec --script-args cmd='shutdown' <target>"
outputPreview:
  - "PORT     STATE SERVICE VERSION"
  - "3310/tcp open  clam    ClamAV 0.99.2 (21714)"
  - "| clamav-exec:"
  - "|   VULNERABLE:"
  - "|   ClamAV Remote Command Execution"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/clamav-exec.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/clamav-exec.html"
---

Exploits ClamAV servers vulnerable to unauthenticated clamav comand execution.
ClamAV server 0.99.2, and possibly other previous versions, allow the execution
of dangerous service commands without authentication. Specifically, the command 'SCAN'
may be used to list system files and the command 'SHUTDOWN' shut downs the
service. This vulnerability was discovered by Alejandro Hernandez (nitr0us).
This script without arguments test the availability of the command 'SCAN'.
