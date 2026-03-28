---
title: "http-config-backup"
source: official
category: "Auth"
categories:
  - "auth"
  - "intrusive"
shortDescription: "Checks for backups and swap files of common content management system\nand web server configuration files."
risk: intrusive
tags:
  - "auth"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-config-backup <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-config-backup:"
  - "|   /%23wp-config.php%23 HTTP/1.1 200 OK"
  - "|_  /config.php~ HTTP/1.1 200 OK"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-config-backup.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-config-backup.html"
---

Checks for backups and swap files of common content management system
and web server configuration files.
When web server files are edited in place, the text editor can leave
backup or swap files in a place where the web server can serve them. The
script checks for these files:
wp-config.php : WordPress

 config.php : phpBB, ExpressionEngine

 configuration.php : Joomla

 LocalSettings.php : MediaWiki

 /mediawiki/LocalSettings.php : MediaWiki

 mt-config.cgi : Movable Type

 mt-static/mt-config.cgi : Movable Type

 settings.php : Drupal

 .htaccess : Apache

And for each of these file applies the following transformations (using
 config.php as an example):
config.bak : Generic backup.

 config.php.bak : Generic backup.

 config.php~ : Vim, Gedit.

 #config.php# : Emacs.

 config copy.php : Mac OS copy.

 Copy of config.php : Windows copy.

 config.php.save : GNU Nano.

 .config.php.swp : Vim swap.

 config.php.swp : Vim swap.

 config.php.old : Generic backup.

This script is inspired by the CMSploit program by Feross Aboukhadijeh:
 http://www.feross.org/cmsploit/ .
