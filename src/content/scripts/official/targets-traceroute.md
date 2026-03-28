---
title: "targets-traceroute"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Inserts traceroute hops into the Nmap scanning queue. It only functions if\nNmap's --traceroute option is used and the newtargets\nscript argument is given."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script targets-traceroute --script-args newtargets --traceroute target"
outputPreview:
  - "Host script results:"
  - "|_traceroute-scan-hops: successfully added 5 new targets."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/targets-traceroute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/targets-traceroute.html"
---

Inserts traceroute hops into the Nmap scanning queue. It only functions if
Nmap's --traceroute option is used and the newtargets
script argument is given.
