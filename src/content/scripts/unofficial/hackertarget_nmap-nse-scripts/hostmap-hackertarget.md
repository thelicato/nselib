---
title: "hostmap-hackertarget"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "external"
shortDescription: "Discovers hostnames (DNS A records) that resolve to the target's IP address by querying the online reverse IP lookup at http://hackertarget.com/reverse-ip-lookup/."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "external"
  - "hackertarget/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script hostmap-hackertarget -p 80 -Pn nmap.org"
outputPreview:
  - "| hostmap-hackertarget:"
  - "|   hosts:"
  - "|     cgi.insecure.org"
  - "|     download.insecure.org"
  - "|     images.insecure.org"
  - "|     insecure.com"
author: "Peter Hill (upstream: hackertarget/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/hackertarget/nmap-nse-scripts/blob/master/hostmap-hackertarget.nse"
---

Imported from the upstream repository [hackertarget/nmap-nse-scripts](https://github.com/hackertarget/nmap-nse-scripts).
Discovers hostnames (DNS A records) that resolve to the target's IP address by querying the online reverse IP lookup at http://hackertarget.com/reverse-ip-lookup/.
Script based on hostmap-robtex.nse by Arturo 'Buanzo' Busleiman.
Nmap 6.47 may error with:
/usr/local/bin/../share/nmap/nselib/shortport.lua:200: attempt to index field 'version' (a nil value)
Fix issue by getting latest shortport.lua from the Nmap svn.
