---
title: "http-wordpress-info"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "Finds the WordPress version, theme and plugins observed in the page response.\n- WordPress version tests for a meta generator html tag, if this is not found an attempt\nis made to match version in page HTML or /feed/atom/ a default page in all versions of WordPress.\n- Theme is determined by searching HTML resposne for /wp-content/themes/$themename\n- Discovered plugins are those that match /wp-content/plugins/$pluginname in the HTML\nresponse. This will not find all plugins, to find all plugins you will need the\nhttp-wordpress-plugins nse script to brute force the plugin paths.\n- Additional checks are performed to match comments or other identifiers in the HTML for known plugins."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "hackertarget/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script http-wordpress-info [--script-args http-wordpress-info.path=<path>,http-wordpress-info.redirects=<number>,...] <host>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "80/tcp  open  http"
  - "| http-wordpress-info:"
  - "|   version: WordPress 4.0"
  - "|   theme: canvas"
  - "|   plugins:"
author: "Peter Hill <peter@hackertarget.com> (upstream: hackertarget/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/hackertarget/nmap-nse-scripts/blob/master/http-wordpress-info.nse"
---

Imported from the upstream repository [hackertarget/nmap-nse-scripts](https://github.com/hackertarget/nmap-nse-scripts).
Finds the WordPress version, theme and plugins observed in the page response.
- WordPress version tests for a meta generator html tag, if this is not found an attempt
is made to match version in page HTML or /feed/atom/ a default page in all versions of WordPress.
- Theme is determined by searching HTML resposne for /wp-content/themes/$themename
- Discovered plugins are those that match /wp-content/plugins/$pluginname in the HTML
response. This will not find all plugins, to find all plugins you will need the
http-wordpress-plugins nse script to brute force the plugin paths.
- Additional checks are performed to match comments or other identifiers in the HTML for known plugins.
Original script based on code from Michael Kohl's http-generator.nse
