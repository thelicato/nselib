---
title: "http-drupal-enum"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Enumerates the installed Drupal modules/themes by using a list of known modules and themes."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 80 --script http-drupal-enum <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-drupal-enum:"
  - "|   Themes:"
  - "|     adaptivetheme"
  - "|   Modules:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-drupal-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-drupal-enum.html"
---

Enumerates the installed Drupal modules/themes by using a list of known modules and themes.
The script works by iterating over module/theme names and requesting
MODULE_PATH/MODULE_NAME/LICENSE.txt for modules and THEME_PATH/THEME_NAME/LICENSE.txt.
MODULE_PATH/THEME_PATH which is either provided by the user, grepped for in the html body
or defaulting to sites/all/modules/.
If the response status code is 200, it means that the module/theme is installed. By
default, the script checks for the top 100 modules/themes (by downloads), given the
huge number of existing modules (~18k) and themes(~1.4k).
If you want to update your themes or module list refer to the link below.
