---
title: "mysql-auth-bypass"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "vulnerability"
shortDescription: "Checks for MySQL servers vulnerable to the authentication bypass CVE-2012-2122\nposted to http://seclists.org/oss-sec/2012/q2/493"
risk: intrusive
tags:
  - "intrusive"
  - "vulnerability"
  - "4armed/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: ""
outputPreview:
  - "3306/tcp open  mysql"
  - "| mysql-auth-bypass:"
  - "|_  user root is vulnerable to auth bypass"
author: "Marc Wickenden (upstream: 4ARMED/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/4ARMED/nmap-nse-scripts/blob/master/mysql-auth-bypass.nse"
---

Imported from the upstream repository [4ARMED/nmap-nse-scripts](https://github.com/4ARMED/nmap-nse-scripts).
NMAP Scripting Engine custom scripts
====================================

* mysql-auth-bypass - checks to see whether or not a MySQL database is vulnerable to CVE-2012-2122
