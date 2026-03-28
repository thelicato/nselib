---
title: "dns-brute2"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "discovery"
shortDescription: "Attempts to enumerate DNS hostnames by brute force guessing of common\nsubdomains. With the <code>dns-brute.srv</code> argument, dns-brute will also\ntry to enumerate common DNS SRV records."
risk: intrusive
tags:
  - "intrusive"
  - "discovery"
  - "aerissecure/nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script dns-brute2 --script-args dns-brute.threads=10,dns-brute.hostlist=./vhosts.lst,dns-brute.maxhosts=1000,dns-brute.resolverlist=./resolvers.lst,dns-brute.checkresolvers=true,dns-brute.maxresolvers=50  -sn -Pn -d"
outputPreview:
  - "Pre-scan script results:"
  - "| dns-brute2:"
  - "|   DNS Brute-force hostnames"
  - "|     www.foo.com - 127.0.0.1"
  - "|     mail.foo.com - 127.0.0.2"
  - "|     blog.foo.com - 127.0.1.3"
author: "Jeffrey Stiles (original dns-brute script by Cirrus) (upstream: aerissecure/nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/aerissecure/nse/blob/master/dns-brute2.nse"
---

Imported from the upstream repository [aerissecure/nse](https://github.com/aerissecure/nse).
Attempts to enumerate DNS hostnames by brute force guessing of common
subdomains. With the <code>dns-brute.srv</code> argument, dns-brute will also
try to enumerate common DNS SRV records.
The main difference between dns-brute2 and the original is the ability to
specify a resolver list. Past a few threads, using a single resolver may
result in rate limiting and misses from the system's default resolver. The
resolver list allows each thread to use a different resolver.
Since this script will run concurrently for many hosts, once a resolver is
used for a thread, it is taken out of rotation such that each resolver is
only used once. Once all resolvers are used, remaining threads will fall back to the
system resolver.
Because the list of resolvers is potentially stale or out-of-date, an option
(checkresolvers) is included to require a single successfull resolution
from the resolver before including it in the pool.
The number of resolvers from the list that will be used is determined by the
number of hosts to be scanned and the number of threads. The maxresolvers
option can be used so that no resolvers need to be checked beyond what will
be used for the scan.
Note that the original script strips hosts down to their root domain before
performing the scan. If you want to scan subdomains of a subdomain, the
script may need to be adjusted.
