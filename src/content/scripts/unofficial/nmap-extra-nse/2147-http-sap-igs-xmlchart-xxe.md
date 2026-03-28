---
title: "2147-http-sap-igs-xmlchart-xxe"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Script for exploiting CVE-2018-2392 and CVE-2018-2393, two XXE vulnerabilities in outdated versions of SAP IGS servers.\nYou can now exploit these vulnerabilities by using this script to read arbitrary files on vulnerable systems as\nthe user who installed the SAP IGS server."
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: ""
outputPreview:
  - "Nmap scan report for 172.16.30.29"
  - "Host is up (0.023s latency)."
author: "Vladimir @_generic_human_ Ivanov (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/2147-http-sap-igs-xmlchart-xxe.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Script for exploiting CVE-2018-2392 and CVE-2018-2393, two XXE vulnerabilities in outdated versions of SAP IGS servers.
You can now exploit these vulnerabilities by using this script to read arbitrary files on vulnerable systems as
the user who installed the SAP IGS server.
