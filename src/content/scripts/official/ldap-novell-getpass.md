---
title: "ldap-novell-getpass"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Universal Password enables advanced password policies, including extended\ncharacters in passwords, synchronization of passwords from eDirectory to\nother systems, and a single password for all access to eDirectory."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 636 --script ldap-novell-getpass --script-args \\\n'ldap-novell-getpass.username=\"CN=admin,O=cqure\", \\\nldap-novell-getpass.password=pass1234, \\\nldap-novell-getpass.account=\"CN=paka,OU=hr,O=cqure\"'"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "636/tcp open  ldapssl syn-ack"
  - "| ldap-novell-getpass:"
  - "|   Account: CN=patrik,OU=security,O=cqure"
  - "|_  Password: foobar"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ldap-novell-getpass.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ldap-novell-getpass.html"
---

Universal Password enables advanced password policies, including extended
characters in passwords, synchronization of passwords from eDirectory to
other systems, and a single password for all access to eDirectory.
In case the password policy permits administrators to retrieve user
passwords ("Allow admin to retrieve passwords" is set in the password
policy) this script can retrieve the password.
