---
title: "url-snarf"
source: official
category: "Safe"
categories:
  - "safe"
shortDescription: "Sniffs an interface for HTTP traffic and dumps any URLs, and their\noriginating IP address. Script output differs from other script as\nURLs are written to stdout directly. There is also an option to log\nthe results to file."
risk: safe
tags:
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script url-snarf -e <interface>"
outputPreview:
  - "| url-snarf:"
  - "|_  Sniffed 169 URLs in 5 seconds"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/url-snarf.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/url-snarf.html"
---

Sniffs an interface for HTTP traffic and dumps any URLs, and their
originating IP address. Script output differs from other script as
URLs are written to stdout directly. There is also an option to log
the results to file.
The script can be limited in time by using the timeout argument or run until a
ctrl+break is issued, by setting the timeout to 0.
