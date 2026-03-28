---
title: "krb5-enum-users"
source: official
category: "Auth"
categories:
  - "auth"
  - "intrusive"
shortDescription: "Discovers valid usernames by brute force querying likely usernames against a Kerberos service.\nWhen an invalid username is requested the server will respond using the\nKerberos error code KRB5KDC_ERR_C_PRINCIPAL_UNKNOWN, allowing us to determine\nthat the user name was invalid. Valid user names will illicit either the\nTGT in a AS-REP response or the error KRB5KDC_ERR_PREAUTH_REQUIRED, signaling\nthat the user is required to perform pre authentication."
risk: intrusive
tags:
  - "auth"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 88 --script krb5-enum-users --script-args krb5-enum-users.realm='test'"
outputPreview:
  - "PORT   STATE SERVICE      REASON"
  - "88/tcp open  kerberos-sec syn-ack"
  - "| krb5-enum-users:"
  - "| Discovered Kerberos principals"
  - "|     administrator@test"
  - "|     mysql@test"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/krb5-enum-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/krb5-enum-users.html"
---

Discovers valid usernames by brute force querying likely usernames against a Kerberos service.
When an invalid username is requested the server will respond using the
Kerberos error code KRB5KDC_ERR_C_PRINCIPAL_UNKNOWN, allowing us to determine
that the user name was invalid. Valid user names will illicit either the
TGT in a AS-REP response or the error KRB5KDC_ERR_PREAUTH_REQUIRED, signaling
that the user is required to perform pre authentication.
The script should work against Active Directory and ?
It needs a valid Kerberos REALM in order to operate.
