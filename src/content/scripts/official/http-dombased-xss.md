---
title: "http-dombased-xss"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "exploit"
  - "vuln"
shortDescription: "It looks for places where attacker-controlled information in the DOM may be used\nto affect JavaScript execution in certain ways. The attack is explained here:\n http://www.webappsec.org/projects/articles/071105.shtml"
risk: intrusive
tags:
  - "intrusive"
  - "exploit"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-dombased-xss.nse <target>\n\nDOM-based XSS occur in client-side JavaScript and this script tries to detect\nthem by using some patterns. Please note, that the script may generate some\nfalse positives. Don't take everything in the output as a vulnerability, if\nyou don't review it first.\n\nMost of the patterns used to determine the vulnerable code have been taken\nfrom this page: https://code.google.com/p/domxsswiki/wiki/LocationSources"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-dombased-xss:"
  - "| Spidering limited to: maxdepth=3; maxpagecount=20; withinhost=some-very-random-page.com"
  - "|   Found the following indications of potential DOM based XSS:"
  - "|"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-dombased-xss.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-dombased-xss.html"
---

It looks for places where attacker-controlled information in the DOM may be used
to affect JavaScript execution in certain ways. The attack is explained here:
 http://www.webappsec.org/projects/articles/071105.shtml
