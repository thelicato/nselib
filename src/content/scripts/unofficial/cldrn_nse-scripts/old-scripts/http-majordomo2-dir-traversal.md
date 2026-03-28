---
title: "http-majordomo2-dir-traversal"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
  - "exploit"
shortDescription: "Exploits a directory traversal vulnerability existing in Majordomo2 to retrieve remote files. (CVE-2011-0049)."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "exploit"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-majordomo2-dir-traversal <host/ip>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http    syn-ack"
  - "| http-majordomo2-dir-traversal: /etc/passwd was found:"
  - "|"
  - "| root:x:0:0:root:/root:/bin/bash"
  - "| bin:x:1:1:bin:/bin:/sbin/nologin"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-majordomo2-dir-traversal.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Exploits a directory traversal vulnerability existing in Majordomo2 to retrieve remote files. (CVE-2011-0049).
Vulnerability originally discovered by Michael Brooks.
For more information about this vulnerability:
* http://www.mj2.org/
* http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2011-0049
* http://www.exploit-db.com/exploits/16103/
