---
title: "oracle-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against Oracle servers."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script oracle-brute -p 1521 --script-args oracle-brute.sid=ORCL <host>"
outputPreview:
  - "PORT     STATE  SERVICE REASON"
  - "1521/tcp open  oracle  syn-ack"
  - "| oracle-brute:"
  - "|   Accounts"
  - "|     system:powell => Account locked"
  - "|     haxxor:haxxor => Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/oracle-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/oracle-brute.html"
---

Performs brute force password auditing against Oracle servers.
Running it in default mode it performs an audit against a list of common
Oracle usernames and passwords. The mode can be changed by supplying the
argument oracle-brute.nodefault at which point the script will use the
username- and password- lists supplied with Nmap. Custom username- and
password- lists may be supplied using the userdb and passdb arguments.
The default credential list can be changed too by using the brute.credfile
argument. In case the userdb or passdb arguments are supplied, the script
assumes that it should run in the nodefault mode.
In modern versions of Oracle password guessing speeds decrease after a few
guesses and remain slow, due to connection throttling.
WARNING: The script makes no attempt to discover the amount of guesses
that can be made before locking an account. Running this script may therefor
result in a large number of accounts being locked out on the database server.
