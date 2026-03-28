---
title: "ftp-proftpd-backdoor"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "intrusive"
  - "malware"
  - "vuln"
shortDescription: "Tests for the presence of the ProFTPD 1.3.3c backdoor reported as BID\n45150. This script attempts to exploit the backdoor using the innocuous\n id command by default, but that can be changed with the\n ftp-proftpd-backdoor.cmd script argument."
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
usage: "nmap --script ftp-proftpd-backdoor -p 21 <host>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "21/tcp open  ftp"
  - "| ftp-proftpd-backdoor:"
  - "|   This installation has been backdoored."
  - "|   Command: id"
  - "|   Results: uid=0(root) gid=0(wheel) groups=0(wheel)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ftp-proftpd-backdoor.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ftp-proftpd-backdoor.html"
---

Tests for the presence of the ProFTPD 1.3.3c backdoor reported as BID
45150. This script attempts to exploit the backdoor using the innocuous
 id command by default, but that can be changed with the
 ftp-proftpd-backdoor.cmd script argument.
