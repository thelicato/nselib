---
title: "http-livestreet-brute"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "performs brute force password auditing against livestreet CMS installations."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "dukebarman/luanmap"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script http-livestreet-brute <target>\nnmap -sV --script http-livestreet-brute\n  --script-args 'userdb=users.txt,passdb=passwds.txt,http-livestreet-brute.hostname=domain.com,\n                 http-livestreet-brute.threads=3,brute.firstonly=true' <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "80/tcp   open  http    syn-ack"
  - "| http-livestreet-brute:"
  - "|   Accounts"
  - "|     admin:qwerty => Login correct"
  - "|   Statistics"
author: "Boris Ryutin <https://twitter.com/dukebarman> (upstream: dukebarman/luanmap)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/dukebarman/luanmap/blob/master/http-livestreet-brute.nse"
---

Imported from the upstream repository [dukebarman/luanmap](https://github.com/dukebarman/luanmap).
performs brute force password auditing against livestreet CMS installations.
This script uses the unpwdb and brute libraries to perform password guessing. Any successful guesses are
stored using the credentials library.
livestreet default uri and form names:
* Default uri:<code>/login/</code>
* Default uservar: <code>login</code>
* Default passvar: <code>password</code>
