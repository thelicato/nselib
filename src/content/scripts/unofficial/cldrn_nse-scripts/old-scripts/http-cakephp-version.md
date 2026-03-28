---
title: "http-cakephp-version"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Obtains the CakePHP version of a web application built with the CakePHP framework. This script depends on default files shipped with the CakePHP framework."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80,443 --script http-cakephp-version <host/ip>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-cakephp-version: Version of codebase: 1.2.x"
  - "| Version of icons: 1.2.x"
  - "| Version of stylesheet: 1.2.6"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-cakephp-version.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Obtains the CakePHP version of a web application built with the CakePHP framework. This script depends on default files shipped with the CakePHP framework.
This script queries the files 'vendors.php', 'cake.generic.css', 'cake.icon.png' and 'cake.icon.gif' to try to obtain the version of the CakePHP installation.
Since installations that had been upgraded are prone to false positives due to old files that aren't removed, the script displays 3 different versions:
* Codebase: Taken from the existence of vendors.php (1.1.x or 1.2.x if it does and 1.3.x otherwise)
* Stylesheet: Taken from cake.generic.css
* Icon: Taken from cake.icon.gif or cake.icon.png
For more information about CakePHP visit: http://www.cakephp.org/.
