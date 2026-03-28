---
title: "smb-print-text"
source: official
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "Attempts to print text on a shared printer by calling Print Spooler Service RPC functions."
risk: intrusive
tags:
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap  -p 445 <target> --script=smb-print-text  --script-args=\"text=0wn3d\""
outputPreview:
  - "|_smb-print-text: Printer job started using MyPrinter printer share."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-print-text.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-print-text.html"
---

Attempts to print text on a shared printer by calling Print Spooler Service RPC functions.
In order to use the script, at least one printer needs to be shared
over SMB. If no printer is specified, script tries to enumerate existing
ones by calling LANMAN API which might not be always available.
LANMAN is available by default on Windows XP, but not on Vista or Windows 7
for example. In that case, you need to specify printer share name manually
using printer script argument. You can find out available shares
by using smb-enum-shares script.
Later versions of Windows require valid credentials by default
which you can specify trough smb library arguments smbuser and
 smbpassword or other options.
