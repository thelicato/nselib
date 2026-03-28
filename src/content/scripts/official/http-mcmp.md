---
title: "http-mcmp"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Checks if the webserver allows mod_cluster management protocol (MCMP) methods."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=http-mcmp <target>"
outputPreview:
  - "| http-mcmp:"
  - "|   status: Mod_cluster Management Protocol enabled"
  - "|   version: 1.2.0.Final"
  - "|   dump:"
  - "| balancer: [1] Name: mycluster Sticky: 1 [JSESSIONID]/[jsessionid] remove: 0 force: 0 Timeout: 0 maxAttempts: 1"
  - "| node: [1:1],Balancer: mycluster,JVMRoute: 2ca5eb39-053e-336f-8708-85f753a3adf2,LBGroup: [],Host: 155.250.130.22,Port: 11000,Type: http,flushpackets: 0,flushwait: 10,ping: 10,smax: 1,ttl: 60,timeout: 0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-mcmp.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-mcmp.html"
---

Checks if the webserver allows mod_cluster management protocol (MCMP) methods.
The script sends a MCMP PING message to determine protocol support, then issues
the DUMP command to dump the current configuration seen by mod_cluster_manager.
References:
