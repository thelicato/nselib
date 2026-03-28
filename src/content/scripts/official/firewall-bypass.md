---
title: "firewall-bypass"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
shortDescription: "Detects a vulnerability in netfilter and other firewalls that use helpers to\ndynamically open ports for protocols such as ftp and sip."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script firewall-bypass <target>\nnmap --script firewall-bypass --script-args firewall-bypass.helper=\"ftp\", firewall-bypass.targetport=22 <target>"
outputPreview:
  - "Host script results:"
  - "| firewall-bypass:"
  - "|_  Firewall vulnerable to bypass through ftp helper. (IPv4)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/firewall-bypass.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/firewall-bypass.html"
---

Detects a vulnerability in netfilter and other firewalls that use helpers to
dynamically open ports for protocols such as ftp and sip.
The script works by spoofing a packet from the target server asking for opening
a related connection to a target port which will be fulfilled by the firewall
through the adequate protocol helper port. The attacking machine should be on
the same network segment as the firewall for this to work. The script supports
ftp helper on both IPv4 and IPv6. Real path filter is used to prevent such
attacks.
Based on work done by Eric Leblond.
For more information, see:
