---
title: "http-default-accounts"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "auth"
  - "intrusive"
shortDescription: "Tests for access with default credentials used by a variety of web applications and devices."
risk: intrusive
tags:
  - "discovery"
  - "auth"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p80 --script http-default-accounts host/ip"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-default-accounts:"
  - "|   [Cacti] at /"
  - "|     admin:admin"
  - "|   [Nagios] at /nagios/"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-default-accounts.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-default-accounts.html"
---

Tests for access with default credentials used by a variety of web applications and devices.
It works similar to http-enum, we detect applications by matching known paths and launching a login routine using default credentials when found.
This script depends on a fingerprint file containing the target's information: name, category, location paths, default credentials and login routine.
You may select a category if you wish to reduce the number of requests. We have categories like:

 web - Web applications

 routers - Routers

 security - CCTVs and other security devices

 industrial - Industrial systems

 printer - Network-attached printers and printer servers

 storage - Storage devices

 virtualization - Virtualization systems

 console - Remote consoles

You can also select a specific fingerprint or a brand, such as BIG-IQ or Siemens. This matching is based on case-insensitive words. This means that "nas" will select Seagate BlackArmor NAS storage but not Netgear ReadyNAS.
For a fingerprint to be used it needs to satisfy both the category and name criteria.
By default, the script produces output only when default credentials are found, while staying silent when the target only matches some fingerprints (but no credentials are found). With increased verbosity (option -v), the script will also report all matching fingerprints.
Please help improve this script by adding new entries to nselib/data/http-default-accounts.lua
Remember each fingerprint must have:

 name - Descriptive name

 category - Category

 login_combos - Table of login combinations

 paths - Table containing possible path locations of the target

 login_check - Login function of the target

In addition, a fingerprint should have:

 target_check - Target validation function. If defined, it will be called to validate the target before attempting any logins.

 cpe - Official CPE Dictionary entry (see https://nvd.nist.gov/cpe.cfm )

Default fingerprint file: /nselib/data/http-default-accounts-fingerprints.lua
This script was based on http-enum.
