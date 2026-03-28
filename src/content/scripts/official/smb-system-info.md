---
title: "smb-system-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Pulls back information about the remote system from the registry. Getting all\nof the information requires an administrative account, although a user account\nwill still get a lot of it. Guest probably won't get any, nor will anonymous.\nThis goes for all operating systems, including Windows 2000."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-system-info.nse -p445 <host>\nsudo nmap -sU -sS --script smb-system-info.nse -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "|  smb-system-info:"
  - "|  |  OS Details"
  - "|  |  |  Microsoft Windows 2000 Service Pack 4 (ServerNT 5.0 build 2195)"
  - "|  |  |  Installed on 2008-10-10 05:47:19"
  - "|  |  |  Registered to Ron (organization: Government of Manitoba)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-system-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-system-info.html"
---

Pulls back information about the remote system from the registry. Getting all
of the information requires an administrative account, although a user account
will still get a lot of it. Guest probably won't get any, nor will anonymous.
This goes for all operating systems, including Windows 2000.
Windows Vista disables remote registry access by default, so unless it was enabled,
this script won't work.
If you know of more information stored in the Windows registry that could be interesting,
post a message to the nmap-dev mailing list and I (Ron Bowes) will add it to my todo list.
Adding new checks to this is extremely easy.
WARNING: I have experienced crashes in regsvc.exe while making registry calls
against a fully patched Windows 2000 system; I've fixed the issue that caused it,
but there's no guarantee that it (or a similar vuln in the same code) won't show
up again. Since the process automatically restarts, it doesn't negatively impact
the system, besides showing a message box to the user.
