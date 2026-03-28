---
title: "omp2-enum-targets"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Attempts to retrieve the list of target systems and networks from an OpenVAS Manager server."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 9390 --script omp2-brute,omp2-enum-targets <target>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "9390/tcp open  openvas"
  - "| omp2-enum-targets:"
  - "|  Targets for account admin:"
  - "|  TARGET              HOSTS"
  - "|  Sales network       192.168.20.0/24"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/omp2-enum-targets.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/omp2-enum-targets.html"
---

Attempts to retrieve the list of target systems and networks from an OpenVAS Manager server.
The script authenticates on the manager using provided or previously cracked
credentials and gets the list of defined targets for each account.
These targets will be added to the scanning queue in case
 newtargets global variable is set.
