---
title: "1539-cip-tags-enum"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
shortDescription: "Collects all tag names and types for Allen-Bradley Logix 5000 PLCs via\nCIP Service Code 0x55 - Get_Instance_Attribute_List"
risk: informational
tags:
  - "discovery"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script cip-tags-enum.nse -p 44818 <host>"
outputPreview:
  - "PORT      STATE SERVICE"
  - "44818/tcp open  EtherNetIP-2"
  - "| cip-tags-enum:"
  - "|   Controller Tags:"
  - "|     (0x0002) VAR_1: REAL"
  - "|     (0x000D) VAR_2: BOOL"
author: "Luis Rosa (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1539-cip-tags-enum.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Collects all tag names and types for Allen-Bradley Logix 5000 PLCs via
CIP Service Code 0x55 - Get_Instance_Attribute_List
See Logix 5000 Controllers Data Access
https://literature.rockwellautomation.com/idc/groups/literature/documents/pm/1756-pm020_-en-p.pdf
