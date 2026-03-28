---
title: "ssh-auth-methods"
source: official
category: "Auth"
categories:
  - "auth"
  - "intrusive"
shortDescription: "Returns authentication methods that a SSH server supports."
risk: intrusive
tags:
  - "auth"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 22 --script ssh-auth-methods --script-args=\"ssh.user=<username>\" <target>"
outputPreview:
  - "22/tcp open  ssh     syn-ack"
  - "22/tcp open  ssh     syn-ack"
  - "| ssh-auth-methods:"
  - "|   Supported authentication methods:"
  - "|     publickey"
  - "|     password"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssh-auth-methods.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssh-auth-methods.html"
---

Returns authentication methods that a SSH server supports.
This is in the "intrusive" category because it starts an authentication with a
username which may be invalid. The abandoned connection will likely be logged.
