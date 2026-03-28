---
title: "ftp-vuln-cve2010-4221"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Checks for a stack-based buffer overflow in the ProFTPD server, version\nbetween 1.3.2rc3 and 1.3.3b. By sending a large number of TELNET_IAC escape\nsequence, the proftpd process miscalculates the buffer length, and a remote\nattacker will be able to corrupt the stack and execute arbitrary code within\nthe context of the proftpd process (CVE-2010-4221). Authentication is not\nrequired to exploit this vulnerability."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script ftp-vuln-cve2010-4221 -p 21 <host>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "21/tcp open  ftp"
  - "| ftp-vuln-cve2010-4221:"
  - "|   VULNERABLE:"
  - "|   ProFTPD server TELNET IAC stack overflow"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ftp-vuln-cve2010-4221.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ftp-vuln-cve2010-4221.html"
---

Checks for a stack-based buffer overflow in the ProFTPD server, version
between 1.3.2rc3 and 1.3.3b. By sending a large number of TELNET_IAC escape
sequence, the proftpd process miscalculates the buffer length, and a remote
attacker will be able to corrupt the stack and execute arbitrary code within
the context of the proftpd process (CVE-2010-4221). Authentication is not
required to exploit this vulnerability.
