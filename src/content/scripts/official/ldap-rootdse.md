---
title: "ldap-rootdse"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Retrieves the LDAP root DSA-specific Entry (DSE)"
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 389 --script ldap-rootdse <host>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "389/tcp open  ldap"
  - "| ldap-rootdse:"
  - "|     currentTime: 20100112092616.0Z"
  - "|     subschemaSubentry: CN=Aggregate,CN=Schema,CN=Configuration,DC=cqure,DC=net"
  - "|     dsServiceName: CN=NTDS Settings,CN=LDAPTEST001,CN=Servers,CN=Default-First-Site,CN=Sites,CN=Configuration,DC=cqure,DC=net"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ldap-rootdse.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ldap-rootdse.html"
---

Retrieves the LDAP root DSA-specific Entry (DSE)
