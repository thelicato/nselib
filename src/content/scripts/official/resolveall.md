---
title: "resolveall"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "NOTE: This script has been replaced by the --resolve-all\ncommand-line option in Nmap 7.70"
risk: safe
tags:
  - "safe"
  - "discovery"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=resolveall --script-args=newtargets,resolveall.hosts={<host1>, ...} ...\nnmap --script=resolveall manyaddresses.example.com"
outputPreview:
  - "Pre-scan script results:"
  - "| resolveall:"
  - "|   Host 'google.com' resolves to:"
  - "|     74.125.39.106"
  - "|     74.125.39.147"
  - "|     74.125.39.99"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/resolveall.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/resolveall.html"
---

NOTE: This script has been replaced by the --resolve-all
command-line option in Nmap 7.70
Resolves hostnames and adds every address (IPv4 or IPv6, depending on
Nmap mode) to Nmap's target list. This differs from Nmap's normal
host resolution process, which only scans the first address (A or AAAA
record) returned for each host name.
The script will run on any target provided by hostname. It can also be fed
hostnames via the resolveall.hosts argument. Because it adds new
targets by IP address it will not run recursively, since those new targets were
not provided by hostname. It will also not add the same IP that was initially
chosen for scanning by Nmap.
