---
title: "http-screenshot"
source: unofficial
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
shortDescription: "This script uses PhantomJS to connect to all dicovered HTTP services and save\na rendered image of the website to a file and print a snippet of the visible\ntext on the rendered page. An HTML file is produced to display all captured\nimages and provide links to their targets"
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "aerissecure/nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script http-screenshot <target>\nnmap --script http-screenshot --script-args http-screenshot.textonly <target>\nnmap --script http-screenshot --script-args http-screenshot.files <target>\nnmap --script http-screenshot --script-args http-screenshot.prefix=\"pre\" <target>\nnmap --script http-screenshot --script-args http-screenshot.headless"
outputPreview:
  - "443/tcp open  https   syn-ack"
  - "| http-screenshot:"
  - "|   filename: http-screenshot_aerissecure.com_443.png"
  - "|_  text: Home Services Resources Aeris Labs Blog About Contact Compli..."
author: "Jeffrey Stiles (upstream: aerissecure/nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/aerissecure/nse/blob/master/http-screenshot.nse"
---

Imported from the upstream repository [aerissecure/nse](https://github.com/aerissecure/nse).
This script uses PhantomJS to connect to all dicovered HTTP services and save
a rendered image of the website to a file and print a snippet of the visible
text on the rendered page. An HTML file is produced to display all captured
images and provide links to their targets
There is a 'textonly' option to save only the rendered text without the image
file. By default, images are base64 encoded and embedded in the HTML file.
However, the 'files' option can be used to output the images to separate files
that the HTML file will reference. The 'prefix' option allows all output files
to be prefixed in order to avoid conflicts.
If you encounter errors running this script on a headless system, you can use
the 'headless' option to pass the correct environment variables.
A common use case for this script is to quickly identify what is running on all
HTTP servers discovered during a scan so that interesting targets can quickly
be identified for further investigation.
This script relies on the PhantomJS binary. This application should be
downloaded from http://phantomjs.org/ and placed on the system path.
