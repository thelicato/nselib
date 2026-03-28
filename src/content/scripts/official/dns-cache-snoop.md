---
title: "dns-cache-snoop"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "discovery"
shortDescription: "Performs DNS cache snooping against a DNS server."
risk: intrusive
tags:
  - "intrusive"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 53 --script dns-cache-snoop.nse --script-args 'dns-cache-snoop.mode=timed,dns-cache-snoop.domains={host1,host2,host3}' <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "53/udp open  domain  udp-response"
  - "| dns-cache-snoop: 10 of 100 tested domains are cached."
  - "| www.google.com"
  - "| facebook.com"
  - "| www.facebook.com"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dns-cache-snoop.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dns-cache-snoop.html"
---

Performs DNS cache snooping against a DNS server.
There are two modes of operation, controlled by the
 dns-cache-snoop.mode script argument. In
 nonrecursive mode (the default), queries are sent to the
server with the RD (recursion desired) flag set to 0. The server should
respond positively to these only if it has the domain cached. In
 timed mode, the mean and standard deviation response times
for a cached domain are calculated by sampling the resolution of a name
(www.google.com) several times. Then, each domain is resolved and the
time taken compared to the mean. If it is less than one standard
deviation over the mean, it is considered cached. The timed
mode inserts entries in the cache and can only be used reliably once.
The default list of domains to check consists of the top 50 most popular
sites, each site being listed twice, once with "www." and once without.
Use the dns-cache-snoop.domains script argument to use a
different list.
