---
title: "smtp-strangeport"
source: official
category: "Malware"
categories:
  - "malware"
  - "safe"
shortDescription: "Checks if SMTP is running on a non-standard port."
risk: safe
tags:
  - "malware"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=smtp-strangeport <target>"
outputPreview:
  - "22/tcp  open   smtp"
  - "|_ smtp-strangeport: Mail server on unusual port: possible malware"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smtp-strangeport.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smtp-strangeport.html"
---

Checks if SMTP is running on a non-standard port.
This may indicate that crackers or script kiddies have set up a backdoor on the
system to send spam or control the machine.
