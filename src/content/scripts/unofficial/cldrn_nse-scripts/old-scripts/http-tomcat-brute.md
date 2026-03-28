---
title: "http-tomcat-brute"
source: unofficial
category: "Default"
categories:
  - "default"
  - "auth"
  - "intrusive"
shortDescription: "Performs a brute force password attack against Apache Tomcat installations."
risk: intrusive
tags:
  - "default"
  - "auth"
  - "intrusive"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "./nmap --script http-tomcat-brute --script-args 'http-tomcat-brute.hostname=192.168.1.105,http-tomcat-brute.threads=8' 192.168.1.105"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "8180/tcp open  unknown syn-ack"
  - "| http-tomcat-brute:"
  - "|   Accounts"
  - "|     tomcat:tomcat => Login correct"
  - "|   Statistics"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-tomcat-brute.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Performs a brute force password attack against Apache Tomcat installations.
Tomcat default:
* uri: <code>/manager/html</code>
