---
title: "http-drupal-enum-users"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Enumerates Drupal users by exploiting an information disclosure vulnerability\nin Views, Drupal's most popular module."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-drupal-enum-users --script-args http-drupal-enum-users.root=\"/path/\" <targets>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-drupal-enum-users:"
  - "|   admin"
  - "|   alex"
  - "|   manager"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-drupal-enum-users.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-drupal-enum-users.html"
---

Enumerates Drupal users by exploiting an information disclosure vulnerability
in Views, Drupal's most popular module.
Requests to admin/views/ajax/autocomplete/user/STRING return all usernames that
begin with STRING. The script works by iterating STRING over letters to extract
all usernames.
