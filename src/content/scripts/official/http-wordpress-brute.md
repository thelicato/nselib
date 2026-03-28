---
title: "http-wordpress-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "performs brute force password auditing against Wordpress CMS/blog installations."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
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
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-wordpress-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-wordpress-brute.html"
---

performs brute force password auditing against Wordpress CMS/blog installations.
This script uses the unpwdb and brute libraries to perform password guessing. Any successful guesses are
stored using the credentials library.
