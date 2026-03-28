---
title: "http-sql-injection"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Spiders an HTTP server looking for URLs containing queries vulnerable to an SQL\ninjection attack. It also extracts forms from found websites and tries to identify\nfields that are vulnerable."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=http-sql-injection <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http    syn-ack"
  - "| http-sql-injection:"
  - "|   Possible sqli for queries:"
  - "|     http://foo.pl/forms/page.php?param=13'%20OR%20sqlspider"
  - "|   Possible sqli for forms:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-sql-injection.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-sql-injection.html"
---

Spiders an HTTP server looking for URLs containing queries vulnerable to an SQL
injection attack. It also extracts forms from found websites and tries to identify
fields that are vulnerable.
The script spiders an HTTP server looking for URLs containing queries. It then
proceeds to combine crafted SQL commands with susceptible URLs in order to
obtain errors. The errors are analysed to see if the URL is vulnerable to
attack. This uses the most basic form of SQL injection but anything more
complicated is better suited to a standalone tool.
We may not have access to the target web server's true hostname, which can prevent access to
virtually hosted sites.
