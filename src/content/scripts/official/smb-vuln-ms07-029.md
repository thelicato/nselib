---
title: "smb-vuln-ms07-029"
source: official
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
  - "hostrule"
scriptTypes:
  - "hostrule"
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
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-vuln-ms07-029.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-vuln-ms07-029.html"
---

Detects Microsoft Windows systems with Dns Server RPC vulnerable to MS07-029.
MS07-029 targets the R_DnssrvQuery() and R_DnssrvQuery2()
RPC method which isa part of DNS Server RPC interface that serves as a RPC service
for configuring and getting information from the DNS Server service.
DNS Server RPC service can be accessed using "\dnsserver" SMB named pipe.
The vulnerability is triggered when a long string is send as the "zone" parameter
which causes the buffer overflow which crashes the service.
This check was previously part of smb-check-vulns.
