---
title: "ftp-vsftpd-backdoor"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "intrusive"
  - "malware"
  - "vuln"
shortDescription: "Tests for the presence of the vsFTPd 2.3.4 backdoor reported on 2011-07-04\n(CVE-2011-2523). This script attempts to exploit the backdoor using the\ninnocuous id command by default, but that can be changed with\nthe exploit.cmd or ftp-vsftpd-backdoor.cmd script\narguments."
risk: intrusive
tags:
  - "exploit"
  - "intrusive"
  - "malware"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script ftp-vsftpd-backdoor -p 21 <host>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "21/tcp open  ftp"
  - "| ftp-vsftpd-backdoor:"
  - "|   VULNERABLE:"
  - "|   vsFTPd version 2.3.4 backdoor"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ftp-vsftpd-backdoor.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ftp-vsftpd-backdoor.html"
---

Tests for the presence of the vsFTPd 2.3.4 backdoor reported on 2011-07-04
(CVE-2011-2523). This script attempts to exploit the backdoor using the
innocuous id command by default, but that can be changed with
the exploit.cmd or ftp-vsftpd-backdoor.cmd script
arguments.
References:
