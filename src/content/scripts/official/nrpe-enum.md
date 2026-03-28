---
title: "nrpe-enum"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Queries Nagios Remote Plugin Executor (NRPE) daemons to obtain information such\nas load averages, process counts, logged in user information, etc."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script nrpe-enum -p 5666 <host>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "5666/tcp open  nrpe    syn-ack"
  - "| nrpe-enum:"
  - "| Command             State     Response"
  - "| check_hda1          CRITICAL  NRPE: Command 'check_hda1' not defined"
  - "| check_load          OK        OK - load average: 1.00, 1.00, 1.00|load1=1.000;15.000;30.000;0; load5=1.000;10.000;25.000;0; load15=1.000;5.000;20.000;0;"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nrpe-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nrpe-enum.html"
---

Queries Nagios Remote Plugin Executor (NRPE) daemons to obtain information such
as load averages, process counts, logged in user information, etc.
This script attempts to execute the stock list of commands that are
enabled. User-supplied arguments are not supported.
