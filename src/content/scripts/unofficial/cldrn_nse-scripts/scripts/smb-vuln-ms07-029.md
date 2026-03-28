---
title: "smb-vuln-ms07-029"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "exploit"
  - "dos"
  - "vuln"
shortDescription: "Detects Microsoft Windows systems with Dns Server RPC vulnerable to MS07-029."
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
usage: "nmap --script smb-vuln-ms07-029.nse -p445 <host>\nnmap -sU --script smb-vuln-ms07-029.nse -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "| smb-vuln-ms07-029:"
  - "|   VULNERABLE:"
  - "|   Windows DNS RPC Interface Could Allow Remote Code Execution (MS07-029)"
  - "|     State: VULNERABLE"
  - "|     IDs:  CVE:CVE-2007-1748"
author: "Ron Bowes, Jiayi Ye, Paulino Calderon <calderon()websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/smb-vuln-ms07-029.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Detects Microsoft Windows systems with Dns Server RPC vulnerable to MS07-029.
MS07-029 targets the <code>R_DnssrvQuery()</code> and <code>R_DnssrvQuery2()</code>
RPC method which isa part of DNS Server RPC interface that serves as a RPC service
for configuring and getting information from the DNS Server service.
DNS Server RPC service can be accessed using "\dnsserver" SMB named pipe.
The vulnerability is triggered when a long string is send as the "zone" parameter
which causes the buffer overflow which crashes the service.
This check was previously part of smb-check-vulns.
