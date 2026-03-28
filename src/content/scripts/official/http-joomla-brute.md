---
title: "http-joomla-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against Joomla web CMS installations."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
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
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-joomla-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-joomla-brute.html"
---

Performs brute force password auditing against Joomla web CMS installations.
This script initially reads the session cookie and parses the security token to perfom the brute force password auditing.
It uses the unpwdb and brute libraries to perform password guessing. Any successful guesses are stored using the
credentials library.
