---
title: "http-log4shell"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "vuln"
  - "exploit"
shortDescription: "Apache Log4j2 <=2.14.1 JNDI features used in configuration, log messages,\nand parameters do not protect against attacker controlled LDAP and other JNDI related endpoints.\nAn attacker who can control log messages or log message parameters can execute arbitrary code\nloaded from LDAP servers when message lookup substitution is enabled."
risk: intrusive
tags:
  - "discovery"
  - "vuln"
  - "exploit"
  - "s4n7h0/nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=http-log4shell --script-args='callback_type=[collaborator, canary, interactsh, dnslog, huntress, requestbin],\\\n                             callback_token=[token],inject=[header,x-api-version]' <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "443/tcp open  https   syn-ack"
  - "|_http-log4shell: Check the email or webhook for the canary token [token]"
author: "Sanoop Thomas (upstream: s4n7h0/NSE)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/s4n7h0/NSE/blob/master/http-log4shell.nse"
---

Imported from the upstream repository [s4n7h0/NSE](https://github.com/s4n7h0/NSE).
Apache Log4j2 <=2.14.1 JNDI features used in configuration, log messages,
and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints.
An attacker who can control log messages or log message parameters can execute arbitrary code
loaded from LDAP servers when message lookup substitution is enabled.
Reference
https://www.lunasec.io/docs/blog/log4j-zero-day/
https://github.com/advisories/GHSA-jfh8-c2jp-5v3q
https://issues.apache.org/jira/browse/LOG4J2-3221
https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228
