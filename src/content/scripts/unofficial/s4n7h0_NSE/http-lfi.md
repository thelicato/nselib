---
title: "http-lfi"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "intrusive"
shortDescription: "\"http-lfi.nse can discover LFI exploit in a web server using the resource value provided.\nthis supports LFI discovery in both windows and linux servers, at the same time,\nit also supports LFI in private pages using a given cookie value. It hopes 20 times\nbackword in the directory and looks for either boot.ini or /etc/passwd file in the\nwebserver and extract the vulnerable path.\""
risk: intrusive
tags:
  - "exploit"
  - "intrusive"
  - "s4n7h0/nse"
scriptTypes: []
protocols: []
ports: []
usage: ""
outputPreview:
  - "80/tcp open  http    syn-ack"
  - "| http-lfi: File Inclusion Found on /download.php?doc=../../../../../etc/passwd"
  - "|   root:x:0:0:root:/root:/bin/bash"
  - "|   daemon:x:1:1:daemon:/usr/sbin:/bin/sh"
  - "|   bin:x:2:2:bin:/bin:/bin/sh"
  - "|   sys:x:3:3:sys:/dev:/bin/sh"
author: "Sanoop Thomas (@s4n7h0) (upstream: s4n7h0/NSE)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/s4n7h0/NSE/blob/master/http-lfi.nse"
---

Imported from the upstream repository [s4n7h0/NSE](https://github.com/s4n7h0/NSE).
"http-lfi.nse can discover LFI exploit in a web server using the resource value provided.
this supports LFI discovery in both windows and linux servers, at the same time,
it also supports LFI in private pages using a given cookie value. It hopes 20 times
backword in the directory and looks for either boot.ini or /etc/passwd file in the
webserver and extract the vulnerable path."
