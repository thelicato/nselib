---
title: "http-svn-enum"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Enumerates users of a Subversion repository by examining logs of most recent commits."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-svn-enum <target>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "443/tcp open  https   syn-ack"
  - "| http-svn-enum:"
  - "| Author   Count  Revision  Date"
  - "| gyani    183    34965     2015-07-24"
  - "| robert   1      34566     2015-06-02"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-svn-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-svn-enum.html"
---

Enumerates users of a Subversion repository by examining logs of most recent commits.
