---
title: "http-shellshock"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
  - "intrusive"
shortDescription: "Attempts to exploit the \"shellshock\" vulnerability (CVE-2014-6271 and\nCVE-2014-7169) in web applications."
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
usage: "nmap -sV -p- --script http-shellshock <target>\nnmap -sV -p- --script http-shellshock --script-args uri=/cgi-bin/bin,cmd=ls <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-shellshock:"
  - "|   VULNERABLE:"
  - "|   HTTP Shellshock vulnerability"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-shellshock.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-shellshock.html"
---

Attempts to exploit the "shellshock" vulnerability (CVE-2014-6271 and
CVE-2014-7169) in web applications.
To detect this vulnerability the script executes a command that prints a random
string and then attempts to find it inside the response body. Web apps that
don't print back information won't be detected with this method.
By default the script injects the payload in the HTTP headers User-Agent,
Cookie, and Referer.
Vulnerability originally discovered by Stephane Chazelas.
