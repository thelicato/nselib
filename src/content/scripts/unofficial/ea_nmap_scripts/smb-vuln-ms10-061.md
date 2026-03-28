---
title: "smb-vuln-ms10-061"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
shortDescription: "Checks if target machines are vulnerable to ms10-061 Printer Spooler impersonation vulnerability."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap  -p 445 <target> --script=smb-vuln-ms10-061"
outputPreview:
  - "PORT    STATE SERVICE      REASON"
  - "445/tcp open  microsoft-ds syn-ack"
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/smb-vuln-ms10-061.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Checks if target machines are vulnerable to ms10-061 Printer Spooler impersonation vulnerability.
This vulnerability was used in Stuxnet worm.
The script checks for the vuln in a safe way without a possibility of crashing the remote system
as this is not a memory corruption vulnerability.
In order for the check to work it needs access to at least one shared printer on the remote system.
By default it tries to enumerate printers by using LANMAN API which on some systems is not
available by default. In that case user should specify printer share name as printer script argument.
To find a printer share, smb-enum-shares can be used.
Also, on some systems, accessing shares requires valid credentials which can be specified with
smb library arguments smbuser and smbpassword.
References:
	- http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2010-2729
	- http://technet.microsoft.com/en-us/security/bulletin/MS10-061
	- http://blogs.technet.com/b/srd/archive/2010/09/14/ms10-061-printer-spooler-vulnerability.aspx
