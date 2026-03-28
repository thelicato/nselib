---
title: "snmp-hh3c-logins"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to enumerate Huawei / HP/H3C Locally Defined Users through the\nhh3c-user.mib OID"
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 161 --script snmp-hh3c-logins --script-args creds.snmp=:<community> <target>"
outputPreview:
  - "| snmp-hh3c-logins:"
  - "|   users:"
  - "|     admin - admin - level: 3"
  - "|_    h3c - h3capadmin - level 0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-hh3c-logins.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-hh3c-logins.html"
---

Attempts to enumerate Huawei / HP/H3C Locally Defined Users through the
hh3c-user.mib OID
For devices running software released pre-Oct 2012 only an SNMP read-only
string is required to access the OID. Otherwise a read-write string is
required.
Output is 'username - password - level: {0|1|2|3}'
Password may be in cleartext, ciphertext or sha256
Levels are from 0 to 3 with 0 being the lowest security level
https://h20566.www2.hp.com/portal/site/hpsc/public/kb/docDisplay/?docId=emr_na-c03515685
 http://grutztopia.jingojango.net/2012/10/hph3c-and-huawei-snmp-weak-access-to.html
