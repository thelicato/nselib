---
title: "smb-enum-shares"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Attempts to list shares using the srvsvc.NetShareEnumAll MSRPC function and\nretrieve more information about them using srvsvc.NetShareGetInfo . If access\nto those functions is denied, a list of common share names are checked."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-enum-shares.nse -p445 <host>\nsudo nmap -sU -sS --script smb-enum-shares.nse -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "| smb-enum-shares:"
  - "|  account_used: WORKGROUP\\Administrator"
  - "|  ADMIN$"
  - "|    Type: STYPE_DISKTREE_HIDDEN"
  - "|    Comment: Remote Admin"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-enum-shares.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-enum-shares.html"
---

Attempts to list shares using the srvsvc.NetShareEnumAll MSRPC function and
retrieve more information about them using srvsvc.NetShareGetInfo . If access
to those functions is denied, a list of common share names are checked.
Finding open shares is useful to a penetration tester because there may be private files
shared, or, if it's writable, it could be a good place to drop a Trojan or to infect a file
that's already there. Knowing where the share is could make those kinds of tests more useful,
except that determining where the share is requires administrative privileges already.
Running NetShareEnumAll will work anonymously against Windows 2000, and
requires a user-level account on any other Windows version. Calling NetShareGetInfo
requires an administrator account on all versions of Windows up to 2003, as well as Windows Vista
and Windows 7, if UAC is turned down.
Even if NetShareEnumAll is restricted, attempting to connect to a share will always
reveal its existence. So, if NetShareEnumAll fails, a pre-generated list of shares,
based on a large test network, are used. If any of those succeed, they are recorded.
After a list of shares is found, the script attempts to connect to each of them anonymously,
which divides them into "anonymous", for shares that the NULL user can connect to, or "restricted",
for shares that require a user account.
