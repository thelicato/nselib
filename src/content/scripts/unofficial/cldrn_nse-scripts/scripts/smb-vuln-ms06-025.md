---
title: "smb-vuln-ms06-025"
source: unofficial
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
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
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
author: "Ron Bowes, Jiayi Ye, Paulino Calderon <calderon()websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/smb-vuln-ms06-025.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Detects Microsoft Windows systems with Ras RPC service vulnerable to MS06-025.
MS06-025 targets the <code>RasRpcSumbitRequest()</code> RPC method which is
a part of RASRPC interface that serves as a RPC service for configuring and
getting information from the Remote Access and Routing service. RASRPC can be
accessed using either "\ROUTER" SMB pipe or the "\SRVSVC" SMB pipe (usually on Windows XP machines).
This is in RPC world known as "ncan_np" RPC transport. <code>RasRpcSumbitRequest()</code>
method is a generic method which provides different functionalities according
to the <code>RequestBuffer</code> structure and particularly the <code>RegType</code> field within that
structure. <code>RegType</code> field is of <code>enum ReqTypes</code> type. This enum type lists all
the different available operation that can be performed using the <code>RasRpcSubmitRequest()</code>
RPC method. The one particular operation that this vuln targets is the <code>REQTYPE_GETDEVCONFIG</code>
request to get device information on the RRAS.
This script was previously part of smb-check-vulns.
