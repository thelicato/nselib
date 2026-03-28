---
title: "http-php-version"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Attempts to retrieve the PHP version from a web server. PHP has a number\nof magic queries that return images or text that can vary with the PHP\nversion. This script uses the following queries:\n\n /?=PHPE9568F36-D428-11d2-A769-00AA001ACF42 : gets a GIF logo, which changes on April Fool's Day.\n\n /?=PHPB8B5F2A0-3C92-11d3-A3A9-4C7B08C10000 : gets an HTML credits page.\n\nA list of magic queries is at http://www.0php.com/php_easter_egg.php .\nThe script also checks if any header field value starts with\n \"PHP\" and reports that value if found."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=http-php-version <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-php-version: Versions from logo query (less accurate): 4.3.11, 4.4.0 - 4.4.9, 5.0.4 - 5.0.5, 5.1.0 - 5.1.2"
  - "| Versions from credits query (more accurate): 5.0.5"
  - "|_Version from header x-powered-by: PHP/5.0.5"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-php-version.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-php-version.html"
---

Attempts to retrieve the PHP version from a web server. PHP has a number
of magic queries that return images or text that can vary with the PHP
version. This script uses the following queries:

 /?=PHPE9568F36-D428-11d2-A769-00AA001ACF42 : gets a GIF logo, which changes on April Fool's Day.

 /?=PHPB8B5F2A0-3C92-11d3-A3A9-4C7B08C10000 : gets an HTML credits page.

A list of magic queries is at http://www.0php.com/php_easter_egg.php .
The script also checks if any header field value starts with
 "PHP" and reports that value if found.
PHP versions after 5.5.0 do not respond to these queries.
