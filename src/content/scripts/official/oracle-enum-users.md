---
title: "oracle-enum-users"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "auth"
shortDescription: "Attempts to enumerate valid Oracle user names against unpatched Oracle 11g\nservers (this bug was fixed in Oracle's October 2009 Critical Patch Update)."
risk: intrusive
tags:
  - "intrusive"
  - "auth"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script oracle-enum-users --script-args oracle-enum-users.sid=ORCL,userdb=orausers.txt -p 1521-1560 <host>\n\nIf no userdb is supplied the default userlist is used"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "1521/tcp open  oracle  syn-ack"
  - "| oracle-enum-users:"
  - "|   haxxor is a valid user account"
  - "|   noob is a valid user account"
  - "|_  patrik is a valid user account"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/oracle-enum-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/oracle-enum-users.html"
---

Attempts to enumerate valid Oracle user names against unpatched Oracle 11g
servers (this bug was fixed in Oracle's October 2009 Critical Patch Update).
