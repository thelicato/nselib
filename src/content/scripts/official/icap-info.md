---
title: "icap-info"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Tests a list of known ICAP service names and prints information about\nany it detects. The Internet Content Adaptation Protocol (ICAP) is\nused to extend transparent proxy servers and is generally used for\ncontent filtering and antivirus scanning."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 1344 <ip> --script icap-info"
outputPreview:
  - "PORT     STATE SERVICE"
  - "1344/tcp open  unknown"
  - "| icap-info:"
  - "|   /avscan"
  - "|     Service: C-ICAP/0.1.6 server - Clamav/Antivirus service"
  - "|     ISTag: CI0001-000-0973-6314940"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/icap-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/icap-info.html"
---

Tests a list of known ICAP service names and prints information about
any it detects. The Internet Content Adaptation Protocol (ICAP) is
used to extend transparent proxy servers and is generally used for
content filtering and antivirus scanning.
