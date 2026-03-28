---
title: "mop-discover"
source: unofficial
category: "Default"
categories:
  - "default"
  - "safe"
  - "discovery"
shortDescription: "Detect the Maintenance Operation Protocol (MOP) by sending layer 2 DEC DNA Remote\nConsole hello/test messages. This protocol is e.g. used on Cisco devices (enabled\nby default on various images)."
risk: safe
tags:
  - "default"
  - "safe"
  - "discovery"
  - "takeshixx/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script mop-discover 192.168.1.1\nnmap --script mop-discover --script-argets target=01:02:03:04:05:06"
outputPreview:
  - "Host script results:"
  - "|_mop-discover: Maintenance Operation Protocol (MOP) is supported."
author: "Niklaus Schiess <nschiess@ernw.de> (upstream: takeshixx/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/takeshixx/nmap-scripts/blob/master/mop-discover.nse"
---

Imported from the upstream repository [takeshixx/nmap-scripts](https://github.com/takeshixx/nmap-scripts).
Detect the Maintenance Operation Protocol (MOP) by sending layer 2 DEC DNA Remote
Console hello/test messages. This protocol is e.g. used on Cisco devices (enabled
by default on various images).
Note: The console can be used with the moprc utility provided by the DECnet for
Linux project.
Further information:
  * http://sourceforge.net/projects/linux-decnet
  * http://linux-decnet.sourceforge.net/docs/doc_index.html
  * https://en.wikipedia.org/wiki/DECnet
