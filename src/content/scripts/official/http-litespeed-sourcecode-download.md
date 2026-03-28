---
title: "http-litespeed-sourcecode-download"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
  - "exploit"
shortDescription: "Exploits a null-byte poisoning vulnerability in Litespeed Web Servers 4.0.x\nbefore 4.0.15 to retrieve the target script's source code by sending a HTTP\nrequest with a null byte followed by a .txt file extension (CVE-2010-2333)."
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
usage: "nmap -p80 --script http-litespeed-sourcecode-download --script-args http-litespeed-sourcecode-download.uri=/phpinfo.php <host>\nnmap -p8088 --script http-litespeed-sourcecode-download <host>"
outputPreview:
  - "PORT     STATE SERVICE    REASON"
  - "8088/tcp open  radan-http syn-ack"
  - "| http-litespeed-sourcecode-download.nse: /phpinfo.php source code:"
  - "| <HTML>"
  - "| <BODY>"
  - "|    <?php phpinfo() ?>"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-litespeed-sourcecode-download.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-litespeed-sourcecode-download.html"
---

Exploits a null-byte poisoning vulnerability in Litespeed Web Servers 4.0.x
before 4.0.15 to retrieve the target script's source code by sending a HTTP
request with a null byte followed by a .txt file extension (CVE-2010-2333).
