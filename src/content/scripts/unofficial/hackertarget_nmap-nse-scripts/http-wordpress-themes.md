---
title: "http-wordpress-themes"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Discover a list of installed WordPress themes. Brute force of the theme path\n/wp-content/themes/$themename/ testing for known themes. As seen in the widespread\ntimthumb vulnerability themes installed but not activated can still be exploited."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "hackertarget/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=http-wordpress-themes --script-args http-wordpress-themes.root=\"/blog/\",http-wordpress-themes.search=500 <targets>"
outputPreview:
  - "Interesting ports on my.woot.blog (123.123.123.123):"
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-wordpress-themes:"
  - "| search amongst the 500 most popular themes"
  - "|   twentyfourteen 1.3"
author: "Peter Hill <peter@hackertarget.com> (upstream: hackertarget/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/hackertarget/nmap-nse-scripts/blob/master/http-wordpress-themes.nse"
---

Imported from the upstream repository [hackertarget/nmap-nse-scripts](https://github.com/hackertarget/nmap-nse-scripts).
Discover a list of installed WordPress themes. Brute force of the theme path
/wp-content/themes/$themename/ testing for known themes. As seen in the widespread
timthumb vulnerability themes installed but not activated can still be exploited.
After detection of a valid theme path, the script will attempt to GET the style.css
of the theme. This is a standard file in WordPress themes that contains the theme
version, if found the version will be included in the output.
The theme list has been created and sorted by theme popularity after crawling the
top 1 million sites. Also includes themes from wordpress.org.  Anything but a 404
means that a given theme directory probably exists, so the theme probably also does.
The available themes for Wordpress is huge and despite the efforts of Nmap to
parallelize the queries, a whole search could take an hour or so. That's why
the theme list is sorted by popularity and by default the script will only
check the first 100 ones. Users can tweak this with an option (see below).
NSE Script is a clone of the http-wordpress-plugins.nse script by Ange Gutek.
