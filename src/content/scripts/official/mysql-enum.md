---
title: "mysql-enum"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs valid-user enumeration against MySQL server using a bug\ndiscovered and published by Kingcope\n( http://seclists.org/fulldisclosure/2012/Dec/9 )."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=mysql-enum <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "3306/tcp open  mysql   syn-ack"
  - "| mysql-enum:"
  - "|   Accounts"
  - "|     admin:<empty> - Valid credentials"
  - "|     test:<empty> - Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mysql-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mysql-enum.html"
---

Performs valid-user enumeration against MySQL server using a bug
discovered and published by Kingcope
( http://seclists.org/fulldisclosure/2012/Dec/9 ).
Server version 5.x are susceptible to an user enumeration
attack due to different messages during login when using
old authentication mechanism from versions 4.x and earlier.
