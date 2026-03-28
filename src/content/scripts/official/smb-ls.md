---
title: "smb-ls"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Attempts to retrieve useful information about files shared on SMB volumes.\nThe output is intended to resemble the output of the UNIX ls command."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -p 445 <ip> --script smb-ls --script-args 'share=c$,path=\\temp'\nnmap -p 445 <ip> --script smb-enum-shares,smb-ls"
outputPreview:
  - "Host script results:"
  - "| smb-ls:"
  - "|   Volume \\\\192.168.56.101\\c$\\"
  - "|   SIZE   TIME                 FILENAME"
  - "|   0      2007-12-02 00:20:09  AUTOEXEC.BAT"
  - "|   0      2007-12-02 00:20:09  CONFIG.SYS"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-ls.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-ls.html"
---

Attempts to retrieve useful information about files shared on SMB volumes.
The output is intended to resemble the output of the UNIX ls command.
