---
title: "smb-vuln-ms10-061"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
shortDescription: "Tests whether target machines are vulnerable to ms10-061 Printer Spooler impersonation vulnerability."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap  -p 445 <target> --script=smb-vuln-ms10-061"
outputPreview:
  - "PORT    STATE SERVICE      REASON"
  - "445/tcp open  microsoft-ds syn-ack"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-vuln-ms10-061.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-vuln-ms10-061.html"
---

Tests whether target machines are vulnerable to ms10-061 Printer Spooler impersonation vulnerability.
This vulnerability was used in Stuxnet worm. The script checks for
the vuln in a safe way without a possibility of crashing the remote
system as this is not a memory corruption vulnerability. In order for
the check to work it needs access to at least one shared printer on
the remote system. By default it tries to enumerate printers by using
LANMAN API which on some systems is not available by default. In that
case user should specify printer share name as printer script
argument. To find a printer share, smb-enum-shares can be used.
Also, on some systems, accessing shares requires valid credentials
which can be specified with smb library arguments smbuser and
smbpassword.
References:
 - http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2010-2729
 - http://technet.microsoft.com/en-us/security/bulletin/MS10-061
 - http://blogs.technet.com/b/srd/archive/2010/09/14/ms10-061-printer-spooler-vulnerability.aspx
