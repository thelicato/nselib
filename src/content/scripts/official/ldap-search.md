---
title: "ldap-search"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Attempts to perform an LDAP search and returns all matches."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 389 --script ldap-search --script-args 'ldap.username=\"cn=ldaptest,cn=users,dc=cqure,dc=net\",ldap.password=ldaptest,\nldap.qfilter=users,ldap.attrib=sAMAccountName' <host>\n\nnmap -p 389 --script ldap-search --script-args 'ldap.username=\"cn=ldaptest,cn=users,dc=cqure,dc=net\",ldap.password=ldaptest,\nldap.qfilter=custom,ldap.searchattrib=\"operatingSystem\",ldap.searchvalue=\"Windows *Server*\",ldap.attrib={operatingSystem,whencreated,OperatingSystemServicePack}' <host>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "389/tcp open  ldap    syn-ack"
  - "| ldap-search:"
  - "|   DC=cqure,DC=net"
  - "|     dn: CN=Administrator,CN=Users,DC=cqure,DC=net"
  - "|         sAMAccountName: Administrator"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ldap-search.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ldap-search.html"
---

Attempts to perform an LDAP search and returns all matches.
If no username and password is supplied to the script the Nmap registry
is consulted. If the ldap-brute script has been selected
and it found a valid account, this account will be used. If not
anonymous bind will be used as a last attempt.
