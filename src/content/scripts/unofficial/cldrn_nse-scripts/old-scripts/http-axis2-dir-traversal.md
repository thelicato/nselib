---
title: "http-axis2-dir-traversal"
source: unofficial
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
  - "exploit"
shortDescription: "http-axis2-dir-traversal exploits a directory traversal vulnerability in Apache Axis2 version 1.4.1 by sending a specially crafted request to the parameter <code>xsd</code> (OSVDB-59001). By default it will try to retrieve the configuration file of the Axis2 service <code>'/conf/axis2.xml'</code> using the path <code>'/axis2/services/'</code> to return the username and password of the admin account."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "exploit"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80,8080 --script http-axis2-dir-traversal --script-args 'http-axis2-dir-traversal.file=../../../../../../../etc/issue' <host/ip>\nnmap -p80 --script http-axis2-dir-traversal <host/ip>"
outputPreview:
  - "80/tcp open  http    syn-ack"
  - "|_http-axis2-dir-traversal.nse: Admin credentials found -> admin:axis2"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/http-axis2-dir-traversal.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
http-axis2-dir-traversal exploits a directory traversal vulnerability in Apache Axis2 version 1.4.1 by sending a specially crafted request to the parameter <code>xsd</code> (OSVDB-59001). By default it will try to retrieve the configuration file of the Axis2 service <code>'/conf/axis2.xml'</code> using the path <code>'/axis2/services/'</code> to return the username and password of the admin account.
To exploit this vulnerability we need to detect a valid service running on the installation so we extract it from <code>/listServices</code> before exploiting the directory traversal vulnerability.
By default it will retrieve the configuration file, if you wish to retrieve other files you need to set the argument <code>http-axis2-dir-traversal.file</code> correctly to traverse to the file's directory. Ex. <code>../../../../../../../../../etc/issue</code>
To check the version of an Apache Axis2 installation go to:
http://domain/axis2/services/Version/getVersion
Reference:
* http://osvdb.org/show/osvdb/59001
* http://www.exploit-db.com/exploits/12721/
