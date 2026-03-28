---
title: "smtp-dovecot-exim-exec"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
shortDescription: "Attempts to exploit a remote command execution vulnerability in misconfigured Dovecot/Exim mail servers."
risk: intrusive
tags:
  - "exploit"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script smtp-dovecot-exim-exec --script-args smtp-dovecot-exim-exec.cmd=\"uname -a\" <target>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "465/tcp open  smtps   syn-ack"
  - "|_smtp-dovecot-exim-exec: Malicious payload delivered:250 OK id=XXX"
author: "Paulino Calderon <calderon@websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/smtp-dovecot-exim-exec.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to exploit a remote command execution vulnerability in misconfigured Dovecot/Exim mail servers.
It is important to note that the mail server will not return the output of the command. The mail server
also wont allow space characters but they can be replaced with "${IFS}". Commands can also be
concatenated with "``". The script takes care of the conversion automatically.
References:
* https://www.redteam-pentesting.de/en/advisories/rt-sa-2013-001/-exim-with-dovecot-typical-misconfiguration-leads-to-remote-command-execution
* http://immunityproducts.blogspot.mx/2013/05/how-common-is-common-exim-and-dovecot.html
* CVE not available yet
