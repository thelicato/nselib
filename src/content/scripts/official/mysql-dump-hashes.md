---
title: "mysql-dump-hashes"
source: official
category: "Auth"
categories:
  - "auth"
  - "discovery"
  - "safe"
shortDescription: "Dumps the password hashes from an MySQL server in a format suitable for\ncracking by tools such as John the Ripper. Appropriate DB privileges (root) are required."
risk: safe
tags:
  - "auth"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 3306 <ip> --script mysql-dump-hashes --script-args='username=root,password=secret'"
outputPreview:
  - "PORT     STATE SERVICE"
  - "3306/tcp open  mysql"
  - "| mysql-dump-hashes:"
  - "|   root:*9B500343BC52E2911172EB52AE5CF4847604C6E5"
  - "|   debian-sys-maint:*92357EE43977D9228AC9C0D60BB4B4479BD7A337"
  - "|_  toor:*14E65567ABDB5135D0CFD9A70B3032C179A49EE7"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mysql-dump-hashes.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mysql-dump-hashes.html"
---

Dumps the password hashes from an MySQL server in a format suitable for
cracking by tools such as John the Ripper. Appropriate DB privileges (root) are required.
The username and password arguments take precedence
over credentials discovered by the mysql-brute and mysql-empty-password
scripts.
