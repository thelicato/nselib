---
title: "huawei5xx-udp-info"
source: unofficial
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Tries to obtain the PPPoE credentials, MAC address, firmware version and IP information of the aDSL modems\nHuawei Echolife 520, 520b, 530 and possibly others by exploiting an information disclosure vulnerability via UDP."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sU -p43690 --script huawei5xx-udp-info <target>"
outputPreview:
  - "PORT      STATE         SERVICE REASON"
  - "43690/udp open|filtered unknown no-response"
  - "|_huawei5xx-udp-info: |\\x10||||||||<Firmware version>|||||||||||||||||||||||||||||||<MAC addr>|||<Software version>||||||||||||||||||||||||||||||||||||||||||||| <local ip>|||||||||||||||||||<remote ip>||||||||||||||||||<model>|||||||||||||||<pppoe user>|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||<pppoe password>||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\x01||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/old-scripts/huawei5xx-udp-info.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Tries to obtain the PPPoE credentials, MAC address, firmware version and IP information of the aDSL modems
Huawei Echolife 520, 520b, 530 and possibly others by exploiting an information disclosure vulnerability via UDP.
The script works by sending a crafted UDP packet to port 43690 and then parsing the response that contains
the configuration values. This exploit has been reported to be blocked in some ISPs, in those cases the exploit seems to work fine in local networks.
Vulnerability discovered by Pedro Joaquin. No CVE assigned.
References:
* http://www.hakim.ws/huawei/HG520_udpinfo.tar.gz
* http://websec.ca/advisories/view/Huawei-HG520c-3.10.18.x-information-disclosure
