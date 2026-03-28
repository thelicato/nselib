---
title: "smb-server-stats"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Attempts to grab the server's statistics over SMB and MSRPC, which uses TCP\nports 445 or 139."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-server-stats.nse -p445 <host>\nsudo nmap -sU -sS --script smb-server-stats.nse -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "|  smb-server-stats:"
  - "|  |  Server statistics collected since 2009-09-22 09:56:00 (48d5h53m36s):"
  - "|  |  |  6513655 bytes (1.56 b/s) sent, 40075383 bytes (9.61 b/s) received"
  - "|_ |_ |_ 19323 failed logins, 179 permission errors, 0 system errors, 0 print jobs, 2921 files opened"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-server-stats.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-server-stats.html"
---

Attempts to grab the server's statistics over SMB and MSRPC, which uses TCP
ports 445 or 139.
An administrator account is required to pull these statistics on most versions
of Windows, and Vista and above require UAC to be turned down.
Some of the numbers returned here don't feel right to me, but they're definitely
the numbers that Windows returns. Take the values here with a grain of salt.
These statistics are found using a single call to a SRVSVC function,
 NetServerGetStatistics . This packet is parsed incorrectly by Wireshark,
up to version 1.0.3 (and possibly higher).
