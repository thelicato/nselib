---
title: "phpipam"
source: unofficial
category: "Safe"
categories:
  - "safe"
  - "discovery"
  - "vuln"
shortDescription: "Module Author: r00t-3xp10it\nVuln discover: Saeed reza\nNSE script to detect multiple vulnerabilitys in phpipam (1.2.1 & 1.1.010) versions\nof open-source web IP address management application (IPAM). by default phpipam.nse\nsearches for phpipam.html on target webserver, If target respondes 200 OK then my\nscript will verify the version installed and If the 2 condictions are true it will\ndisplay a vulnerable output."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "vuln"
  - "deadjakk/unofficial-nse-repo"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script-help phpipam.nse\nnmap -sV -Pn -p 80 --open --script phpipam.nse <target or domain>\nnmap -sV -Pn -p 80 --open --reason --script phpipam.nse 192.168.1.0/24\nnmap -sV -Pn -p 80 --open --script phpipam.nse --script-args uri=/phpipam.php <target or domain>\nnmap -sV -Pn -p 80 --open --script phpipam.nse --script-args \"agent=Mozilla/5.0 (compatible; EvilMonkey)\" <target or domain>\nnmap -sV -T4 -iR 400 -Pn -p 80 --open --reason --script phpipam.nse --script-args uri=/phpipam/ -oN IPAMreport.log"
outputPreview:
  - "PORT   STATE SERVICE VERSION"
  - "80/tcp open  http    phpipam 1.2.1"
  - "| phpipam:"
  - "|   STATUS: VULNERABLE"
  - "|   VERSION: 1.2.1 (likelly exploitable)"
  - "|     Disclosure date: 28 set 2016"
author: "r00t-3xp10it"
reference:
  label: "View Mirror Script Source"
  url: "https://github.com/deadjakk/Unofficial-NSE-Repo/blob/main/scripts/r00t3xpl10it_nse/phpipam.nse"
---

Imported from the community mirror repository [deadjakk/Unofficial-NSE-Repo](https://github.com/deadjakk/Unofficial-NSE-Repo) because no upstream `FROM.md` reference was available for this folder.
Module Author: r00t-3xp10it
Vuln discover: Saeed reza
NSE script to detect multiple vulnerabilitys in phpipam (1.2.1 & 1.1.010) versions
of open-source web IP address management application (IPAM). by default phpipam.nse
searches for phpipam.html on target webserver, If target respondes 200 OK then my
script will verify the version installed and If the 2 condictions are true it will
display a vulnerable output.
Some Syntax examples:
nmap --script-help phpipam.nse
nmap -sV -Pn -p 80 --open --script phpipam.nse <target or domain>
nmap -sV -Pn -p 80 --open --reason --script phpipam.nse 192.168.1.0/24
nmap -sV -Pn -p 80 --open --script phpipam.nse --script-args uri=/phpipam.php <target or domain>
nmap -sV -Pn -p 80 --open --script phpipam.nse --script-args "agent=Mozilla/5.0 (compatible; EvilMonkey)" <target or domain>
nmap -sV -T4 -iR 400 -Pn -p 80 --open --reason --script phpipam.nse --script-args uri=/phpipam/ -oN IPAMreport.log
