---
title: "http-axis2-dir-traversal"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
  - "exploit"
shortDescription: "Exploits a directory traversal vulnerability in Apache Axis2 version 1.4.1 by\nsending a specially crafted request to the parameter xsd\n(BID 40343). By default it will try to retrieve the configuration file of the\nAxis2 service '/conf/axis2.xml' using the path\n '/axis2/services/' to return the username and password of the\nadmin account."
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
usage: "nmap -p80,8080 --script http-axis2-dir-traversal --script-args 'http-axis2-dir-traversal.file=../../../../../../../etc/issue' <host/ip>\nnmap -p80 --script http-axis2-dir-traversal <host/ip>"
outputPreview:
  - "80/tcp open  http    syn-ack"
  - "|_http-axis2-dir-traversal.nse: Admin credentials found -> admin:axis2"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-axis2-dir-traversal.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-axis2-dir-traversal.html"
---

Exploits a directory traversal vulnerability in Apache Axis2 version 1.4.1 by
sending a specially crafted request to the parameter xsd
(BID 40343). By default it will try to retrieve the configuration file of the
Axis2 service '/conf/axis2.xml' using the path
 '/axis2/services/' to return the username and password of the
admin account.
To exploit this vulnerability we need to detect a valid service running on the
installation so we extract it from /listServices before exploiting
the directory traversal vulnerability. By default it will retrieve the
configuration file, if you wish to retrieve other files you need to set the
argument http-axis2-dir-traversal.file correctly to traverse to
the file's directory. Ex. ../../../../../../../../../etc/issue
To check the version of an Apache Axis2 installation go to:
 http://domain/axis2/services/Version/getVersion
