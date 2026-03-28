---
title: "http-wordpress-plugins"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Tries to obtain a list of installed WordPress plugins by brute force\ntesting for known plugins."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "hackertarget/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=http-wordpress-plugins --script-args http-wordpress-plugins.root=\"/blog/\",http-wordpress-plugins.search=500 <targets>"
outputPreview:
  - "Interesting ports on my.woot.blog (123.123.123.123):"
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-wordpress-plugins:"
  - "| search amongst the 500 most popular plugins"
  - "|   akismet 3.0.4 (latest version: 3.0.4)"
author: "Ange Gutek (upstream: hackertarget/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/hackertarget/nmap-nse-scripts/blob/master/http-wordpress-plugins.nse"
---

Imported from the upstream repository [hackertarget/nmap-nse-scripts](https://github.com/hackertarget/nmap-nse-scripts).
Tries to obtain a list of installed WordPress plugins by brute force
testing for known plugins.
The script will brute force the /wp-content/plugins/ folder with a dictionary
of 14K (and counting) known WP plugins. Anything but a 404 means that a given
plugin directory probably exists, so the plugin probably also does.
The available plugins for Wordpress is huge and despite the efforts of Nmap to
parallelize the queries, a whole search could take an hour or so. That's why
the plugin list is sorted by popularity and by default the script will only
check the first 100 ones. Users can tweak this with an option (see below).
