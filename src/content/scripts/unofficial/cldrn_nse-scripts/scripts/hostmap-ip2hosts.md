---
title: "hostmap-ip2hosts"
source: unofficial
category: "External"
categories:
  - "external"
  - "discovery"
shortDescription: "Finds hostnames that resolve to the target's IP address by querying the online database:\n* http://www.ip2hosts.com ( Bing Search Results )"
risk: informational
tags:
  - "external"
  - "discovery"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script hostmap-ip2hosts --script-args 'hostmap-ip2hosts.prefix=hostmap-' <targets>"
outputPreview:
  - "Host script results:"
  - "| hostmap-ip2hosts:"
  - "|   hosts:"
  - "|     insecure.org"
  - "|     nmap.org"
  - "|     sectools.org"
author: "Paulino Calderon <calderon@websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/hostmap-ip2hosts.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Finds hostnames that resolve to the target's IP address by querying the online database:
* http://www.ip2hosts.com ( Bing Search Results )
The script is in the "external" category because it sends target IPs to a third party in order to query their database.
