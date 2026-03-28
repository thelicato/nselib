---
title: "http-vuln-cve2013-0156"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "vuln"
shortDescription: "Detects Ruby on Rails servers vulnerable to object injection, remote command executions and denial of service attacks. (CVE-2013-0156)"
risk: intrusive
tags:
  - "exploit"
  - "vuln"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sV --script http-vuln-cve2013-0156 <target>\nnmap -sV --script http-vuln-cve2013-0156 --script-args uri=\"/test/\" <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-vuln-cve2013-0156:"
  - "|   VULNERABLE:"
  - "|   Parameter parsing vulnerabilities in several versions of Ruby on Rails allow object injection, remote command execution and Denial Of Service attacks (CVE-2013-0156)"
  - "|     State: VULNERABLE"
author: "Paulino Calderon <calderon@websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-vuln-cve2013-0156.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Detects Ruby on Rails servers vulnerable to object injection, remote command executions and denial of service attacks. (CVE-2013-0156)
All Ruby on Rails versions before 2.3.15, 3.0.x before 3.0.19, 3.1.x before 3.1.10, and 3.2.x before 3.2.11 are vulnerable. This script
sends 3 harmless yaml payloads to detect vulnerable installations. If the malformed object receives a status 500 response, the server
is processing YAML objects and therefore is likely vulnerable.
References:
* https://community.rapid7.com/community/metasploit/blog/2013/01/10/exploiting-ruby-on-rails-with-metasploit-cve-2013-0156',
* https://groups.google.com/forum/?fromgroups=#!msg/rubyonrails-security/61bkgvnSGTQ/nehwjA8tQ8EJ',
* http://cvedetails.com/cve/2013-0156/
TODO:
* Add argument to exploit cmd exec vuln
