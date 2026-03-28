---
title: "828-iis-buffer-overflow"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
  - "intrusive"
shortDescription: "Buffer overflow in the ScStoragePathFromUrl function in the WebDAV service in Internet Information Services (IIS) 6.0\nin Microsoft Windows Server 2003 R2 allows remote attackers to execute arbitrary code via a long header beginning\nwith \"If: <http://\" in a PROPFIND request, as exploited in the wild in July or August 2016."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "intrusive"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "./nmap --script iis-buffer-overflow.nse -sV <target>"
outputPreview:
  - "PORT   STATE  SERVICE"
  - "80/tcp open   http"
  - "|  iis-buffer-overflow:"
  - "|    VULNERABLE: Buffer Overflow in IIS 6 and Windows Server 2003 R2"
  - "|       State: LIKELY_VULNERABLE"
  - "|       Risk factor: High CVSS: 10.0"
author: "Zhiniang Peng, Chen Wu, LCatro, Rewanth Cool, Samy Kacimi, Maxime Alay-Eddine (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/828-iis-buffer-overflow.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Buffer overflow in the ScStoragePathFromUrl function in the WebDAV service in Internet Information Services (IIS) 6.0
in Microsoft Windows Server 2003 R2 allows remote attackers to execute arbitrary code via a long header beginning
with "If: <http://" in a PROPFIND request, as exploited in the wild in July or August 2016.
Original exploit by Zhiniang Peng and Chen Wu.
