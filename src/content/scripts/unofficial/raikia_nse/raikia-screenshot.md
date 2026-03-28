---
title: "raikia-screenshot"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Screenshots each host using their IP, hostname from the lookup, and the hostname the SSL cert is registered to. This script attempts to screenshot with Javascript enabled.  If the website takes longer than 20 seconds to load, it will be skipped"
risk: safe
tags:
  - "discovery"
  - "safe"
  - "raikia/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: ""
outputPreview: []
author: "Chris King <raikiasec@gmail.com> (upstream: Raikia/Nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/Raikia/Nmap-scripts/blob/master/raikia-screenshot.nse"
---

Imported from the upstream repository [Raikia/Nmap-scripts](https://github.com/Raikia/Nmap-scripts).
Nmap Scripts
======

## raikia-screenshot.nse

This nmap script will take a screenshot of http[s]://ip:port, as well as http[s]://hostname:port AND https://sslcert_name:port.  This differs from other screenshot nmap utilities because it will allow javascript execution, and it will have a timeout on the screenshot request, so the scan won't hang.

All screenshots will be stored in a subfolder named "screenshots"

Designed for Kali 2.0

### Requirements:

  * wkimagetopdf (apt-get install wkimagetopdf)

### Example Usage:

     nmap --script=raikia-screenshot.nse -p 80,443,8080,8443 -iL target_list.txt


-------------------------------------

# Contact Information

Feel free to contact me with any changes or feature requests!

* https://twitter.com/raikiasec
* raikiasec@gmail.com
