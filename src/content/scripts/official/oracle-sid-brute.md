---
title: "oracle-sid-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Guesses Oracle instance/SID names against the TNS-listener."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=oracle-sid-brute --script-args=oraclesids=/path/to/sidfile -p 1521-1560 <host>\nnmap --script=oracle-sid-brute -p 1521-1560 <host>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "1521/tcp open  oracle  syn-ack"
  - "| oracle-sid-brute:"
  - "|   orcl"
  - "|   prod"
  - "|_  devel"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/oracle-sid-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/oracle-sid-brute.html"
---

Guesses Oracle instance/SID names against the TNS-listener.
If the oraclesids script argument is not used to specify an
alternate file, the default oracle-sids file will be used.
License to use the oracle-sids file was granted by its
author, Alexander Kornbrust ( http://seclists.org/nmap-dev/2009/q4/645 ).
