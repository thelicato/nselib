---
title: "ldap-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Attempts to brute-force LDAP authentication. By default\nit uses the built-in username and password lists. In order to use your\nown lists use the userdb and passdb script arguments."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 389 --script ldap-brute --script-args ldap.base='\"cn=users,dc=cqure,dc=net\"' <host>"
outputPreview:
  - "389/tcp open  ldap"
  - "| ldap-brute:"
  - "|_  ldaptest:ldaptest => Valid credentials"
  - "|   restrict.ws:restricted1 => Valid credentials, account cannot log in from current host"
  - "|   restrict.time:restricted1 => Valid credentials, account cannot log in at current time"
  - "|   valid.user:valid1 => Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ldap-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ldap-brute.html"
---

Attempts to brute-force LDAP authentication. By default
it uses the built-in username and password lists. In order to use your
own lists use the userdb and passdb script arguments.
This script does not make any attempt to prevent account lockout!
If the number of passwords in the dictionary exceed the amount of
allowed tries, accounts will be locked out. This usually happens
very quickly.
Authenticating against Active Directory using LDAP does not use the
Windows user name but the user accounts distinguished name. LDAP on Windows
2003 allows authentication using a simple user name rather than using the
fully distinguished name. E.g., "Patrik Karlsson" vs.
"cn=Patrik Karlsson,cn=Users,dc=cqure,dc=net"
This type of authentication is not supported on e.g. OpenLDAP.
