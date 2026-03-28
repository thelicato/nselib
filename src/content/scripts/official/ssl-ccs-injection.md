---
title: "ssl-ccs-injection"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
shortDescription: "Detects whether a server is vulnerable to the SSL/TLS \"CCS Injection\"\nvulnerability (CVE-2014-0224), first discovered by Masashi Kikuchi.\nThe script is based on the ccsinjection.c code authored by Ramon de C Valle\n( https://gist.github.com/rcvalle/71f4b027d61a78c42607 )"
risk: safe
tags:
  - "vuln"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 443 --script ssl-ccs-injection <target>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "443/tcp open  https"
  - "| ssl-ccs-injection:"
  - "|   VULNERABLE:"
  - "|   SSL/TLS MITM vulnerability (CCS Injection)"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssl-ccs-injection.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssl-ccs-injection.html"
---

Detects whether a server is vulnerable to the SSL/TLS "CCS Injection"
vulnerability (CVE-2014-0224), first discovered by Masashi Kikuchi.
The script is based on the ccsinjection.c code authored by Ramon de C Valle
( https://gist.github.com/rcvalle/71f4b027d61a78c42607 )
In order to exploit the vulnerablity, a MITM attacker would effectively
do the following:
o Wait for a new TLS connection, followed by the ClientHello
 ServerHello handshake messages.
o Issue a CCS packet in both the directions, which causes the OpenSSL
 code to use a zero length pre master secret key. The packet is sent
 to both ends of the connection. Session Keys are derived using a
 zero length pre master secret key, and future session keys also
 share this weakness.
o Renegotiate the handshake parameters.
o The attacker is now able to decrypt or even modify the packets
 in transit.
The script works by sending a 'ChangeCipherSpec' message out of order and
checking whether the server returns an 'UNEXPECTED_MESSAGE' alert record
or not. Since a non-patched server would simply accept this message, the
CCS packet is sent twice, in order to force an alert from the server. If
the alert type is different than 'UNEXPECTED_MESSAGE', we can conclude
the server is vulnerable.
