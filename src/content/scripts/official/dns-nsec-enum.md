---
title: "dns-nsec-enum"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Enumerates DNS names using the DNSSEC NSEC-walking technique."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sSU -p 53 --script dns-nsec-enum --script-args dns-nsec-enum.domains=example.com <target>"
outputPreview:
  - "53/udp open  domain  udp-response"
  - "| dns-nsec-enum:"
  - "|   example.com"
  - "|     bulbasaur.example.com"
  - "|     charmander.example.com"
  - "|     dugtrio.example.com"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-nsec-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-nsec-enum.html"
---

Enumerates DNS names using the DNSSEC NSEC-walking technique.
Output is arranged by domain. Within a domain, subzones are shown with
increased indentation.
The NSEC response record in DNSSEC is used to give negative answers to
queries, but it has the side effect of allowing enumeration of all
names, much like a zone transfer. This script doesn't work against
servers that use NSEC3 rather than NSEC; for that, see
 dns-nsec3-enum .
