---
title: "http-wordpress-enum"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Enumerates themes and plugins of Wordpress installations. The script can also detect\n outdated plugins by comparing version numbers with information pulled from api.wordpress.org."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script http-wordpress-enum <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-wordpress-enum:"
  - "| Search limited to top 100 themes/plugins"
  - "|   plugins"
  - "|     akismet"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-wordpress-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-wordpress-enum.html"
---

Enumerates themes and plugins of Wordpress installations. The script can also detect
 outdated plugins by comparing version numbers with information pulled from api.wordpress.org.
The script works with two separate databases for themes (wp-themes.lst) and plugins (wp-plugins.lst).
The databases are sorted by popularity and the script will search only the top 100 entries by default.
The theme database has around 32,000 entries while the plugin database has around 14,000 entries.
The script determines the version number of a plugin by looking at the readme.txt file inside the plugin
directory and it uses the file style.css inside a theme directory to determine the theme version.
If the script argument check-latest is set to true, the script will query api.wordpress.org to obtain
the latest version number available. This check is disabled by default since it queries an external service.
This script is a combination of http-wordpress-plugins.nse and http-wordpress-themes.nse originally
submited by Ange Gutek and Peter Hill.
TODO:
-Implement version checking for themes.
