---
title: "http-default-accounts"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "auth"
  - "safe"
shortDescription: "http-default-accounts tests for access with default credentials in a variety of web applications and devices."
risk: safe
tags:
  - "discovery"
  - "auth"
  - "safe"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-default-accounts host/ip"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "|_http-default-accounts: [Cacti] credentials found -> admin:admin Path:/cacti/"
  - "Final times for host: srtt: 94615 rttvar: 71012  to: 378663"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-default-accounts.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
http-default-accounts tests for access with default credentials in a variety of web applications and devices.
It works similar to http-enum, we detect applications by matching known paths and launching a login routine using default credentials when found.
This script depends on a fingerprint file containing the target's information: name, category, location paths, default credentials and login routine.
You may select a category if you wish to reduce the number of requests. We have categories like:
* <code>web</code> - Web applications
* <code>router</code> - Routers
* <code>voip</code> - VOIP devices
* <code>security</code>
Please help improve this script by adding new entries to nselib/data/http-default-accounts.lua
Remember each fingerprint must have:
* <code>name</code> - Descriptive name
* <code>category</code> - Category
* <code>login_combos</code> - Table of login combinations
* <code>paths</code> - Paths table containing the possible location of the target
* <code>login_check</code> - Login function of the target
Default fingerprint file: /nselib/data/http-default-accounts-fingerprints.lua
This script was based on http-enum.
