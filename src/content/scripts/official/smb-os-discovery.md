---
title: "smb-os-discovery"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Attempts to determine the operating system, computer name, domain, workgroup, and current\ntime over the SMB protocol (ports 445 or 139).\nThis is done by starting a session with the anonymous\naccount (or with a proper user account, if one is given; it likely doesn't make\na difference); in response to a session starting, the server will send back all this\ninformation."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-os-discovery.nse -p445 127.0.0.1\nsudo nmap -sU -sS --script smb-os-discovery.nse -p U:137,T:139 127.0.0.1"
outputPreview:
  - "Host script results:"
  - "| smb-os-discovery:"
  - "|   OS: Windows Server (R) 2008 Standard 6001 Service Pack 1 (Windows Server (R) 2008 Standard 6.0)"
  - "|   OS CPE: cpe:/o:microsoft:windows_2008::sp1"
  - "|   Computer name: Sql2008"
  - "|   NetBIOS computer name: SQL2008"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-os-discovery.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-os-discovery.html"
---

Attempts to determine the operating system, computer name, domain, workgroup, and current
time over the SMB protocol (ports 445 or 139).
This is done by starting a session with the anonymous
account (or with a proper user account, if one is given; it likely doesn't make
a difference); in response to a session starting, the server will send back all this
information.
The following fields may be included in the output, depending on the
circumstances (e.g. the workgroup name is mutually exclusive with domain and forest
names) and the information available:

 OS

 Computer name

 Domain name

 Forest name

 FQDN

 NetBIOS computer name

 NetBIOS domain name

 Workgroup

 System time

Some systems, like Samba, will blank out their name (and only send their domain).
Other systems (like embedded printers) will simply leave out the information. Other
systems will blank out various pieces (some will send back 0 for the current
time, for example).
If this script is used in conjunction with version detection it can augment the
standard nmap version detection information with data that this script has discovered.
Retrieving the name and operating system of a server is a vital step in targeting
an attack against it, and this script makes that retrieval easy. Additionally, if
a penetration tester is choosing between multiple targets, the time can help identify
servers that are being poorly maintained (for more information/random thoughts on
using the time, see http://www.skullsecurity.org/blog/?p=76 .
Although the standard smb* script arguments can be used,
they likely won't change the outcome in any meaningful way. However, smbnoguest
will speed up the script on targets that do not allow guest access.
