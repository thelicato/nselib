---
title: "1260-http-weblogic-brute"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Weblogic Console Brute Script"
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script http-weblogic-brute <target> -p 7001\nnmap -sV --script http-weblogic-brute\n  --script-args 'userdb=users.txt,passdb=passwds.txt,http-weblogic-brute.hostname=domain.com,\n                 http-weblogic-brute.threads=3,brute.firstonly=true' <target> -p 7001"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "7001/tcp   open  http    syn-ack"
  - "| http-weblogic-brute:"
  - "|   Accounts"
  - "|     0xdeadb33f:god => Login correct"
  - "|   Statistics"
author: "Rvn0xsy <payloads@aliyun.com> (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1260-http-weblogic-brute.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Weblogic Console Brute Script
