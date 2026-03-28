---
title: "smtp-vuln-cve2010-4344"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "intrusive"
  - "vuln"
shortDescription: "Checks for and/or exploits a heap overflow within versions of Exim\nprior to version 4.69 (CVE-2010-4344) and a privilege escalation\nvulnerability in Exim 4.72 and prior (CVE-2010-4345)."
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
usage: "nmap --script=smtp-vuln-cve2010-4344 --script-args=\"smtp-vuln-cve2010-4344.exploit\" -pT:25,465,587 <host>\nnmap --script=smtp-vuln-cve2010-4344 --script-args=\"exploit.cmd='uname -a'\" -pT:25,465,587 <host>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "25/tcp open  smtp"
  - "| smtp-vuln-cve2010-4344:"
  - "| Exim heap overflow vulnerability (CVE-2010-4344):"
  - "|   Exim (CVE-2010-4344): VULNERABLE"
  - "|     Shell command 'uname -a': Linux qemu-ubuntu-x32 2.6.38-8-generic #42-Ubuntu SMP Fri Jan 21 17:40:48 UTC 2011 i686 GNU/Linux"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smtp-vuln-cve2010-4344.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smtp-vuln-cve2010-4344.html"
---

Checks for and/or exploits a heap overflow within versions of Exim
prior to version 4.69 (CVE-2010-4344) and a privilege escalation
vulnerability in Exim 4.72 and prior (CVE-2010-4345).
The heap overflow vulnerability allows remote attackers to execute
arbitrary code with the privileges of the Exim daemon
(CVE-2010-4344). If the exploit fails then the Exim smtpd child will
be killed (heap corruption).
The script also checks for a privilege escalation vulnerability that
affects Exim version 4.72 and prior. The vulnerability allows the exim
user to gain root privileges by specifying an alternate configuration
file using the -C option (CVE-2010-4345).
The smtp-vuln-cve2010-4344.exploit script argument will make
the script try to exploit the vulnerabilities, by sending more than 50MB of
data, it depends on the message size limit configuration option of the
Exim server. If the exploit succeed the exploit.cmd or
 smtp-vuln-cve2010-4344.cmd script arguments can be used to
run an arbitrary command on the remote system, under the
 Exim user privileges. If this script argument is set then it
will enable the smtp-vuln-cve2010-4344.exploit argument.
To get the appropriate debug messages for this script, please use -d2.
