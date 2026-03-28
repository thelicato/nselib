---
title: "http-useragent-tester"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Checks if various crawling utilities are allowed by the host."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-useragent-tester.nse <host>\n\nThis script sets various User-Agent headers that are used by different\nutilities and crawling libraries (for example CURL or wget). If the request is\nredirected to a page different than a (valid) browser request would be, that\nmeans that this utility is banned."
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-useragent-tester:"
  - "|   Status for browser useragent: 200"
  - "|   Redirected To: https://www.example.com/"
  - "|   Allowed User Agents:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-useragent-tester.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-useragent-tester.html"
---

Checks if various crawling utilities are allowed by the host.
