---
title: "http-devframework"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Tries to find out the technology behind the target website."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-devframework.nse <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "|_http-devframework: Django detected. Found Django admin login page on /admin/"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-devframework.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-devframework.html"
---

Tries to find out the technology behind the target website.
The script checks for certain defaults that might not have been changed, like
common headers or URLs or HTML content.
While the script does some guessing, note that overall there's no way to
determine what technologies a given site is using.
You can help improve this script by adding new entries to
nselib/data/http-devframework-fingerprints.lua
Each entry must have:

 rapidDetect - Callback function that is called in the beginning

of detection process. It takes the host and port of target website as arguments.

 consumingDetect - Callback function that is called for each

spidered page. It takes the body of the response (HTML code) and the requested
path as arguments.

Note that the consumingDetect callback will not take place only if
 rapid option is enabled.
