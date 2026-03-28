---
title: "vulners"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
  - "external"
shortDescription: "For each available CPE the script prints out known vulns (links to the correspondent info) and correspondent CVSS scores."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "external"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script vulners [--script-args mincvss=<arg_val>] <target>"
outputPreview:
  - "53/tcp   open     domain             ISC BIND DNS"
  - "| vulners:"
  - "|   ISC BIND DNS:"
  - "|     CVE-2012-1667    8.5    https://vulners.com/cve/CVE-2012-1667"
  - "|     CVE-2002-0651    7.5    https://vulners.com/cve/CVE-2002-0651"
  - "|     CVE-2002-0029    7.5    https://vulners.com/cve/CVE-2002-0029"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/vulners.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/vulners.html"
---

For each available CPE the script prints out known vulns (links to the correspondent info) and correspondent CVSS scores.
Its work is pretty simple:

 work only when some software version is identified for an open port

 take all the known CPEs for that software (from the standard nmap -sV output)

 make a request to a remote server (vulners.com API) to learn whether any known vulns exist for that CPE

 if no info is found this way, try to get it using the software name alone

 print the obtained info out

NB:
Since the size of the DB with all the vulns is more than 250GB there is no way to use a local db.
So we do make requests to a remote service. Still all the requests contain just two fields - the
software name and its version (or CPE), so one can still have the desired privacy.
