---
title: "hostmap"
source: unofficial
category: "External"
categories:
  - "external"
  - "discovery"
  - "intrusive"
shortDescription: "Finds hostnames that resolve to the target's IP address by querying the online databases:\n* http://www.bfk.de/bfk_dnslogger.html\n* http://www.whataremyhosts.com ( Bing Search Results )"
risk: intrusive
tags:
  - "external"
  - "discovery"
  - "intrusive"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script hostmap --script-args 'hostmap.prefix=hostmap-,hostmap.provider=BING' <targets>"
outputPreview:
  - "Host script results:"
  - "| hostmap: Saved to hostmap-nmap.org"
  - "| insecure.org"
  - "| 74.207.254.18"
  - "| web.insecure.org"
  - "| download.insecure.org"
author: "Ange Gutek, Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/hostmap.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Finds hostnames that resolve to the target's IP address by querying the online databases:
* http://www.bfk.de/bfk_dnslogger.html
* http://www.whataremyhosts.com ( Bing Search Results )
Optionally users can return results from a specific provider by using the argument <code>hostmap.provider</code>.
The supported provider identifiers are:
* BFK
* BING
The script is in the "external" category because it sends target IPs to a third party in order to query their database.
