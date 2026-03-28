---
title: "http-wordpress-brute"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "auth"
shortDescription: "Performs a brute force password attack against Wordpress installations."
risk: intrusive
tags:
  - "intrusive"
  - "auth"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script http-wordpress-brute <target>\nnmap -sV --script http-wordpress-brute\n  --script-args 'userdb=users.txt,passdb=passwds.txt,http-wordpress-brute.hostname=domain.com,\n                 http-wordpress-brute.threads=3,brute.firstonly=true' <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "80/tcp   open  http    syn-ack"
  - "| http-wordpress-brute:"
  - "|   Accounts"
  - "|     0xdeadb33f:god => Login correct"
  - "|   Statistics"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-wordpress-brute.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Performs a brute force password attack against Wordpress installations.
This script uses the unpwdb and brute libraries to perform password guessing. Any successful guesses are
stored using the credentials library.
Wordpress default uri and form names:
* Default uri:<code>wp-login.php</code>
* Default uservar: <code>log</code>
* Default passvar: <code>pwd</code>
