---
title: "unittest"
source: official
category: "Safe"
categories:
  - "safe"
shortDescription: "Runs unit tests on all NSE libraries."
risk: safe
tags:
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script unittest --script-args unittest.run"
outputPreview:
  - "Pre-scan script results:"
  - "| unittest:"
  - "|_ All tests passed"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/unittest.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/unittest.html"
---

Runs unit tests on all NSE libraries.
