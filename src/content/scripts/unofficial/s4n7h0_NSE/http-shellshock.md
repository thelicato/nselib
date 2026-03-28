---
title: "http-shellshock"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "intrusive"
shortDescription: "\"This script will spider the given URL (or you can give specific URL to test),\nand test for shell shock vulnerbility by accessible /etc/passwd file on the remote machine."
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
  - "| http-shellshock: The system is vulnerable for shellshock"
  - "|   root: x:0:0:root:/root:/bin/bash"
  - "|   bin: x:1:1:bin:/bin:/sbin/nologin"
  - "|   daemon: x:2:2:daemon:/sbin:/sbin/nologin"
  - "|   adm: x:3:4:adm:/var/adm:/sbin/nologin"
author: "Sanoop Thomas (@s4n7h0) (upstream: s4n7h0/NSE)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/s4n7h0/NSE/blob/master/http-shellshock.nse"
---

Imported from the upstream repository [s4n7h0/NSE](https://github.com/s4n7h0/NSE).
"This script will spider the given URL (or you can give specific URL to test),
and test for shell shock vulnerbility by accessible /etc/passwd file on the remote machine.
CVE-2014-6271 : Remote code execution through shell
Reference :
http://www.troyhunt.com/2014/09/everything-you-need-to-know-about.html
http://www.reddit.com/r/netsec/comments/2hbxtc/cve20146271_remote_code_execution_through_bash/ckrbqac
"
