---
title: "smb-print-text"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "Script calls Print Spooler Service RPC functions to a shared printer\nto make it print text."
risk: intrusive
tags:
  - "intrusive"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap  -p 445 <target> --script=smb-print-text  --script-args=\"text=0wn3d\""
outputPreview:
  - "|_smb-print-text: Printer job started using MyPrinter printer share."
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/smb-print-text.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Script calls Print Spooler Service RPC functions to a shared printer
to make it print text.
In order to use the script, at least one printer needs to be shared
over SMB. If no printer is specified, script tries to enumerate existing
ones by calling LANMAN API which might not be always available.
LANMAN is available by default on Windows XP, but not on Vista or Windows 7
for example. In that case, you need to specify printer share name manualy
using <code>printer</code> script argument. You can find out available shares
by using smb-enum-shares script.
Later versions of Windows require valid credentials by default
which you can specify trough smb library arguments <code>smbuser</code> and
<code>smbpassword</code> or other options.
