---
title: "ms-sql-dump-hashes"
source: official
category: "Auth"
categories:
  - "auth"
  - "discovery"
  - "safe"
shortDescription: "Dumps the password hashes from an MS-SQL server in a format suitable for\ncracking by tools such as John-the-ripper. In order to do so the user\nneeds to have the appropriate DB privileges."
risk: safe
tags:
  - "auth"
  - "discovery"
  - "safe"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p 1433 <ip> --script ms-sql-dump-hashes"
outputPreview:
  - "PORT     STATE SERVICE"
  - "1433/tcp open  ms-sql-s"
  - "| ms-sql-dump-hashes:"
  - "|   nmap_test:0x01001234567890ABCDEF01234567890ABCDEF01234567890ABCDEF01234567890ABCDEF01234567890ABCDEF0123"
  - "|   sa:0x01001234567890ABCDEF01234567890ABCDEF01234567890ABCDEF01234567890ABCDEF01234567890ABCDEF0123"
  - "|_  webshop_dbo:0x01001234567890ABCDEF01234567890ABCDEF01234567890ABCDEF01234567890ABCDEF01234567890ABCDEF0123"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ms-sql-dump-hashes.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ms-sql-dump-hashes.html"
---

Dumps the password hashes from an MS-SQL server in a format suitable for
cracking by tools such as John-the-ripper. In order to do so the user
needs to have the appropriate DB privileges.
Credentials passed as script arguments take precedence over credentials
discovered by other scripts.
