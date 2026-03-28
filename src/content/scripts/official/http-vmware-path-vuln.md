---
title: "http-vmware-path-vuln"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Checks for a path-traversal vulnerability in VMWare ESX, ESXi, and Server (CVE-2009-3733)."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-vmware-path-vuln -p80,443,8222,8333 <host>"
outputPreview:
  - "| http-vmware-path-vuln:"
  - "|   VMWare path traversal (CVE-2009-3733): VULNERABLE"
  - "|     /vmware/Windows 2003/Windows 2003.vmx"
  - "|     /vmware/Pentest/Pentest - Linux/Linux Pentest Bravo.vmx"
  - "|     /vmware/Pentest/Pentest - Windows/Windows 2003.vmx"
  - "|     /mnt/vmware/vmware/FreeBSD 7.2/FreeBSD 7.2.vmx"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vmware-path-vuln.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vmware-path-vuln.html"
---

Checks for a path-traversal vulnerability in VMWare ESX, ESXi, and Server (CVE-2009-3733).
The vulnerability was originally released by Justin Morehouse and Tony Flick, who presented at Shmoocon 2010 ( http://fyrmassociates.com/tools.html ).
