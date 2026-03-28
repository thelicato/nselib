---
title: "dns-nsec3-enum"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Tries to enumerate domain names from the DNS server that supports DNSSEC\nNSEC3 records."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap  -sU -p 53 <target> --script=dns-nsec3-enum --script-args dns-nsec3-enum.domains=example.com"
outputPreview:
  - "PORT   STATE SERVICE"
  - "53/udp open  domain"
  - "| dns-nsec3-enum:"
  - "|   domain example.com"
  - "|   salt 123456"
  - "|   iterations 10"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-nsec3-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-nsec3-enum.html"
---

Tries to enumerate domain names from the DNS server that supports DNSSEC
NSEC3 records.
The script queries for nonexistant domains until it exhausts all domain
ranges keeping track of hashes. At the end, all hashes are printed along
with salt and number of iterations used. This technique is known as
"NSEC3 walking".
That info should then be fed into an offline cracker, like
 unhash from https://dnscurve.org/nsec3walker.html , to
bruteforce the actual names from the hashes. Assuming that the script
output was written into a text file hashes.txt like:
 domain example.com
salt 123456
iterations 10
nexthash d1427bj0ahqnpi4t0t0aaun18oqpgcda vhnelm23s1m3japt7gohc82hgr9un2at
nexthash k7i4ekvi22ebrim5b6celtaniknd6ilj prv54a3cr1tbcvqslrb7bftf5ji5l0p8
nexthash 9ool6bk7r2diaiu81ctiemmb6n961mph nm7v0ig7h9c0agaedc901kojfj9bgabj
nexthash 430456af8svfvl98l66shhrgucoip7mi mges520acstgaviekurg3oksh9u31bmb

Run this command to recover the domain names:
 # ./unhash < hashes.txt > domains.txt
names: 8
d1427bj0ahqnpi4t0t0aaun18oqpgcda ns.example.com.
found 1 private NSEC3 names (12%) using 235451 hash computations
k7i4ekvi22ebrim5b6celtaniknd6ilj vulpix.example.com.
found 2 private NSEC3 names (25%) using 35017190 hash computations

Use the dns-nsec-enum script to handle servers that use NSEC
rather than NSEC3.
