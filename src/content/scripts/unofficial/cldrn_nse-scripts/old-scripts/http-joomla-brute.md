---
title: "http-joomla-brute"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "auth"
shortDescription: "Performs a brute force password attack against Joomla installations."
risk: intrusive
tags:
  - "intrusive"
  - "auth"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script http-joomla-brute\n  --script-args 'userdb=users.txt,passdb=passwds.txt,http-joomla-brute.hostname=domain.com,\n                 http-joomla-brute.threads=3,brute.firstonly=true' <target>\nnmap -sV --script http-joomla-brute <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-joomla-brute:"
  - "|   Accounts"
  - "|     xdeadbee:i79eWBj07g => Login correct"
  - "|   Statistics"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-joomla-brute.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Performs a brute force password attack against Joomla installations.
This script initially reads the session cookie and parses the security token to perfom the brute force password auditing.
It uses the unpwdb and brute libraries to perform password guessing. Any successful guesses are stored using the
credentials library.
Joomla's default uri and form names:
* Default uri:<code>/administrator/index.php</code>
* Default uservar: <code>username</code>
* Default passvar: <code>passwd</code>
