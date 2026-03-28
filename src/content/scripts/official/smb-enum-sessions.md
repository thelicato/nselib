---
title: "smb-enum-sessions"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Enumerates the users logged into a system either locally or through an SMB share. The local users\ncan be logged on either physically on the machine, or through a terminal services session.\nConnections to a SMB share are, for example, people connected to fileshares or making RPC calls.\nNmap's connection will also show up, and is generally identified by the one that connected \"0\nseconds ago\"."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-enum-sessions.nse -p445 <host>\nsudo nmap -sU -sS --script smb-enum-sessions.nse -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "|  smb-enum-sessions:"
  - "|  Users logged in:"
  - "|  |  TESTBOX\\Administrator since 2008-10-21 08:17:14"
  - "|  |_ DOMAIN\\rbowes since 2008-10-20 09:03:23"
  - "|  Active SMB Sessions:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-enum-sessions.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-enum-sessions.html"
---

Enumerates the users logged into a system either locally or through an SMB share. The local users
can be logged on either physically on the machine, or through a terminal services session.
Connections to a SMB share are, for example, people connected to fileshares or making RPC calls.
Nmap's connection will also show up, and is generally identified by the one that connected "0
seconds ago".
From the perspective of a penetration tester, the SMB Sessions is probably the most useful
part of this program, especially because it doesn't require a high level of access. On, for
example, a file server, there might be a dozen or more users connected at the same time. Based
on the usernames, it might tell the tester what types of files are stored on the share.
Since the IP they're connected from and the account is revealed, the information here can also
provide extra targets to test, as well as a username that's likely valid on that target. Additionally,
since a strong username to ip correlation is given, it can be a boost to a social engineering
attack.
Enumerating the logged in users is done by reading the remote registry (and therefore won't
work against Vista, which disables it by default). Keys stored under HKEY_USERS are
SIDs that represent the connected users, and those SIDs can be converted to proper names by using
the lsar.LsaLookupSids function. Doing this requires any access higher than
anonymous; guests, users, or administrators are all able to perform this request on Windows 2000,
XP, 2003, and Vista.
Enumerating SMB connections is done using the srvsvc.netsessenum function, which
returns the usernames that are logged in, when they logged in, and how long they've been idle
for. The level of access required for this varies between Windows versions, but in Windows
2000 anybody (including the anonymous account) can access this, and in Windows 2003 a user
or administrator account is required.
I learned the idea and technique for this from Sysinternals' tool, PsLoggedOn.exe . I (Ron
Bowes) use similar function calls to what they use (although I didn't use their source),
so thanks go out to them. Thanks also to Matt Gardenghi, for requesting this script.
WARNING: I have experienced crashes in regsvc.exe while making registry calls
against a fully patched Windows 2000 system; I've fixed the issue that caused it,
but there's no guarantee that it (or a similar vuln in the same code) won't show
up again. Since the process automatically restarts, it doesn't negatively impact
the system, besides showing a message box to the user.
