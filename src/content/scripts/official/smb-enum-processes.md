---
title: "smb-enum-processes"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Pulls a list of processes from the remote server over SMB. This will determine\nall running processes, their process IDs, and their parent processes. It is done\nby querying the remote registry service, which is disabled by default on Vista;\non all other Windows versions, it requires Administrator privileges."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-enum-processes.nse -p445 <host>\nsudo nmap -sU -sS --script smb-enum-processes.nse -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "|  smb-enum-processes:"
  - "|_ |_ Idle, System, smss, csrss, winlogon, services, logon.scr, lsass, spoolsv, msdtc, VMwareService, svchost, alg, explorer, VMwareTray, VMwareUser, wmiprvse"
  - "--"
  - "Host script results:"
  - "|  smb-enum-processes:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-enum-processes.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-enum-processes.html"
---

Pulls a list of processes from the remote server over SMB. This will determine
all running processes, their process IDs, and their parent processes. It is done
by querying the remote registry service, which is disabled by default on Vista;
on all other Windows versions, it requires Administrator privileges.
Since this requires administrator privileges, it isn't especially useful for a
penetration tester, since they can effectively do the same thing with metasploit
or other tools. It does, however, provide for a quick way to get process lists
for a bunch of systems at the same time.
WARNING: I have experienced crashes in regsvc.exe while making registry calls
against a fully patched Windows 2000 system; I've fixed the issue that caused
it, but there's no guarantee that it (or a similar vulnerability in the same code) won't
show up again. Since the process automatically restarts, it doesn't negatively
impact the system, besides showing a message box to the user.
