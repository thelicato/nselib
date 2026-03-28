---
title: "dns-random-srcport"
source: official
category: "External"
categories:
  - "external"
  - "intrusive"
shortDescription: "Checks a DNS server for the predictable-port recursion vulnerability.\nPredictable source ports can make a DNS server vulnerable to cache poisoning\nattacks (see CVE-2008-1447)."
risk: intrusive
tags:
  - "external"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 53 --script=dns-random-srcport <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "53/udp open  domain  udp-response"
  - "|_dns-random-srcport: X.X.X.X is GREAT: 26 queries in 1.2 seconds from 26 ports with std dev 17905"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-random-srcport.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-random-srcport.html"
---

Checks a DNS server for the predictable-port recursion vulnerability.
Predictable source ports can make a DNS server vulnerable to cache poisoning
attacks (see CVE-2008-1447).
The script works by querying porttest.dns-oarc.net (see
 https://www.dns-oarc.net/oarc/services/porttest ). Be aware that any
targets against which this script is run will be sent to and
potentially recorded by one or more DNS servers and the porttest
server. In addition your IP address will be sent along with the
porttest query to the DNS server running on the target.
