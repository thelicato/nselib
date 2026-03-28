---
title: "ftp-libopie"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
shortDescription: "Checks if an FTPd is prone to CVE-2010-1938 (OPIE off-by-one stack overflow),\na vulnerability discovered by Maksymilian Arciemowicz and Adam \"pi3\" Zabrocki.\nSee the advisory at https://nmap.org/r/fbsd-sa-opie .\nBe advised that, if launched against a vulnerable host, this script will crash the FTPd."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=ftp-libopie <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "21/tcp open  ftp"
  - "| ftp-libopie:"
  - "|   VULNERABLE:"
  - "|   OPIE off-by-one stack overflow"
  - "|     State: LIKELY VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ftp-libopie.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ftp-libopie.html"
---

Checks if an FTPd is prone to CVE-2010-1938 (OPIE off-by-one stack overflow),
a vulnerability discovered by Maksymilian Arciemowicz and Adam "pi3" Zabrocki.
See the advisory at https://nmap.org/r/fbsd-sa-opie .
Be advised that, if launched against a vulnerable host, this script will crash the FTPd.
