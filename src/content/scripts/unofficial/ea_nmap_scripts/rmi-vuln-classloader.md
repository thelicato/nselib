---
title: "rmi-vuln-classloader"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Checks if rmiregistry allows class loading."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script=rmi-vuln-classloader -p 1099 <target>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "1099/tcp open  rmiregistry"
  - "| rmi-vuln:"
  - "|   VULNERABLE:"
  - "|   RMI registry default configuration remote code execution vulnerability"
  - "|     State: VULNERABLE"
author: "Aleksandar Nikolic (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/rmi-vuln-classloader.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Checks if rmiregistry allows class loading.
The default configuration of rmiregistry allows loading classes from remote
URLs which can lead to remote code execution. This is considered as "by
design".
Based on original Metasploit module by mihi.
References:
* http://dev.metasploit.com/redmine/projects/framework/repository/entry/modules/exploits/multi/misc/java_rmi_server.rb
