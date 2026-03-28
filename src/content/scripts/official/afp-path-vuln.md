---
title: "afp-path-vuln"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "intrusive"
  - "vuln"
shortDescription: "Detects the Mac OS X AFP directory traversal vulnerability, CVE-2010-0533."
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
usage: "nmap -sV --script=afp-path-vuln <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "548/tcp open  afp"
  - "| afp-path-vuln:"
  - "|   VULNERABLE:"
  - "|   Apple Mac OS X AFP server directory traversal"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/afp-path-vuln.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/afp-path-vuln.html"
---

Detects the Mac OS X AFP directory traversal vulnerability, CVE-2010-0533.
This script attempts to iterate over all AFP shares on the remote
host. For each share it attempts to access the parent directory by
exploiting the directory traversal vulnerability as described in
CVE-2010-0533.
The script reports whether the system is vulnerable or not. In
addition it lists the contents of the parent and child directories to
a max depth of 2.
When running in verbose mode, all items in the listed directories are
shown. In non verbose mode, output is limited to the first 5 items.
If the server is not vulnerable, the script will not return any
information.
