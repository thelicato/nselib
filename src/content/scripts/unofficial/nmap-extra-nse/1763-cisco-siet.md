---
title: "1763-cisco-siet"
source: unofficial
category: "Exploit"
categories:
  - "exploit"
  - "safe"
shortDescription: "Script attempts to see whether Cisco device allows us to download config\nusing smart install protocol (4786/tcp).\nIf script confirms that test is successfull and that user has passed get option,\nscript will start tftp server and issue commands to device to copy currently\nrunning config to us."
risk: safe
tags:
  - "exploit"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p4786 --script cisco-siet <target_private_ip>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "4786/tcp open  smart-install"
  - "| cisco-siet:"
  - "|   Host: 192.168.1.1.conf"
  - "|   Status: VULNERABLE"
  - "|_  File_Location: /tmp/192.168.1.1.conf"
author: "Erhad Husovic (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/1763-cisco-siet.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
Script attempts to see whether Cisco device allows us to download config
using smart install protocol (4786/tcp).
If script confirms that test is successfull and that user has passed get option,
script will start tftp server and issue commands to device to copy currently
running config to us.
In case when we want to get config from the device, script will check if we are
attacking public or private IP. if we are attacking public IP, it is required to
provide public IP address to the script, as well as to create port forward rule on router.
By default, without parameters, only test whether device is vulnerable or not.
Script is based on following GitHub repository:
	https://github.com/Sab0tag3d/SIET
Other references:
* https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20170214-smi
* https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20160323-smi
