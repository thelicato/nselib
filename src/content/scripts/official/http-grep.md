---
title: "http-grep"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Spiders a website and attempts to match all pages and urls against a given\nstring. Matches are counted and grouped per url under which they were\ndiscovered."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 80 www.example.com --script http-grep --script-args='match=\"[A-Za-z0-9%.%%%+%-]+@[A-Za-z0-9%.%%%+%-]+%.%w%w%w?%w?\",breakonmatch'\nnmap -p 80 www.example.com --script http-grep --script-args 'http-grep.builtins ={\"mastercard\", \"discover\"}, http-grep.url=\"example.html\"'"
outputPreview:
  - "| http-grep:"
  - "|   (1) https://nmap.org/book/man-bugs.html:"
  - "|     (1) email:"
  - "|       + dev@nmap.org"
  - "|   (1) https://nmap.org/book/install.html:"
  - "|     (1) email:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-grep.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-grep.html"
---

Spiders a website and attempts to match all pages and urls against a given
string. Matches are counted and grouped per url under which they were
discovered.
Features built in patterns like email, ip, ssn, discover, amex and more.
The script searches for email and ip by default.
