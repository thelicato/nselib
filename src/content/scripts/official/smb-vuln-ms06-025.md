---
title: "smb-vuln-ms06-025"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "exploit"
  - "dos"
  - "vuln"
shortDescription: "Detects Microsoft Windows systems with Ras RPC service vulnerable to MS06-025."
risk: intrusive
tags:
  - "intrusive"
  - "exploit"
  - "dos"
  - "vuln"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-vuln-ms06-025.nse -p445 <host>\nnmap -sU --script smb-vuln-ms06-025.nse -p U:137,T:139 <host>"
outputPreview:
  - "| smb-vuln-ms06-025:"
  - "|   VULNERABLE:"
  - "|   RRAS Memory Corruption vulnerability (MS06-025)"
  - "|     State: VULNERABLE"
  - "|     IDs:  CVE:CVE-2006-2370"
  - "|           A buffer overflow vulnerability in the Routing and Remote Access service (RRAS) in Microsoft Windows 2000 SP4, XP SP1"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-vuln-ms06-025.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-vuln-ms06-025.html"
---

Detects Microsoft Windows systems with Ras RPC service vulnerable to MS06-025.
MS06-025 targets the RasRpcSumbitRequest() RPC method which is
a part of RASRPC interface that serves as a RPC service for configuring and
getting information from the Remote Access and Routing service. RASRPC can be
accessed using either "\ROUTER" SMB pipe or the "\SRVSVC" SMB pipe (usually on Windows XP machines).
This is in RPC world known as "ncan_np" RPC transport. RasRpcSumbitRequest()
method is a generic method which provides different functionalities according
to the RequestBuffer structure and particularly the RegType field within that
structure. RegType field is of enum ReqTypes type. This enum type lists all
the different available operation that can be performed using the RasRpcSubmitRequest()
RPC method. The one particular operation that this vuln targets is the REQTYPE_GETDEVCONFIG
request to get device information on the RRAS.
This script was previously part of smb-check-vulns.
