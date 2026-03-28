---
title: "dns-random-txid"
source: official
category: "External"
categories:
  - "external"
  - "intrusive"
shortDescription: "Checks a DNS server for the predictable-TXID DNS recursion\nvulnerability. Predictable TXID values can make a DNS server vulnerable to\ncache poisoning attacks (see CVE-2008-1447)."
risk: intrusive
tags:
  - "external"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 53 --script=dns-random-txid <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "53/udp open  domain  udp-response"
  - "|_dns-random-txid: X.X.X.X is GREAT: 27 queries in 61.5 seconds from 27 txids with std dev 20509"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-random-txid.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-random-txid.html"
---

Checks a DNS server for the predictable-TXID DNS recursion
vulnerability. Predictable TXID values can make a DNS server vulnerable to
cache poisoning attacks (see CVE-2008-1447).
The script works by querying txidtest.dns-oarc.net (see
 https://www.dns-oarc.net/oarc/services/txidtest ). Be aware that any
targets against which this script is run will be sent to and
potentially recorded by one or more DNS servers and the txidtest
server. In addition your IP address will be sent along with the
txidtest query to the DNS server running on the target.
