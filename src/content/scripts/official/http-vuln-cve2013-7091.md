---
title: "http-vuln-cve2013-7091"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
  - "intrusive"
shortDescription: "An 0 day was released on the 6th December 2013 by rubina119, and was patched in Zimbra 7.2.6."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script http-vuln-cve2013-7091 <target>\nnmap -p80 --script http-vuln-cve2013-7091 --script-args http-vuln-cve2013-7091=/ZimBra <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-vuln-cve2013-7091:"
  - "|   VULNERABLE:"
  - "|   Zimbra Local File Inclusion and Disclosure of Credentials"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2013-7091.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2013-7091.html"
---

An 0 day was released on the 6th December 2013 by rubina119, and was patched in Zimbra 7.2.6.
The vulnerability is a local file inclusion that can retrieve any file from the server.
Currently, we read /etc/passwd and /dev/null, and compare the lengths to determine vulnerability.
TODO:
Add the possibility to read compressed file.
Then, send some payload to create the new mail account.
