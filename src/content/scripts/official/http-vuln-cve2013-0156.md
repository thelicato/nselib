---
title: "http-vuln-cve2013-0156"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Detects Ruby on Rails servers vulnerable to object injection, remote command\nexecutions and denial of service attacks. (CVE-2013-0156)"
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script http-vuln-cve2013-0156 <target>\nnmap -sV --script http-vuln-cve2013-0156 --script-args uri=\"/test/\" <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-vuln-cve2013-0156:"
  - "|   VULNERABLE:"
  - "|   Parameter parsing vulnerabilities in several versions of Ruby on Rails allow object injection, remote command execution and Denial Of Service attacks (CVE-2013-0156)"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2013-0156.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2013-0156.html"
---

Detects Ruby on Rails servers vulnerable to object injection, remote command
executions and denial of service attacks. (CVE-2013-0156)
All Ruby on Rails versions before 2.3.15, 3.0.x before 3.0.19, 3.1.x before
3.1.10, and 3.2.x before 3.2.11 are vulnerable. This script sends 3 harmless
YAML payloads to detect vulnerable installations. If the malformed object
receives a status 500 response, the server is processing YAML objects and
therefore is likely vulnerable.
