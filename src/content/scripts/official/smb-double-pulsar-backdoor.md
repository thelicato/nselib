---
title: "smb-double-pulsar-backdoor"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "safe"
  - "malware"
shortDescription: "Checks if the target machine is running the Double Pulsar SMB backdoor."
risk: safe
tags:
  - "vuln"
  - "safe"
  - "malware"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap -p 445 <target> --script=smb-double-pulsar-backdoor"
outputPreview:
  - "| smb-double-pulsar-backdoor:"
  - "|   VULNERABLE:"
  - "|   Double Pulsar SMB Backdoor"
  - "|     State: VULNERABLE"
  - "|     Risk factor: HIGH  CVSSv2: 10.0 (HIGH) (AV:N/AC:L/Au:N/C:C/I:C/A:C)"
  - "|       The Double Pulsar SMB backdoor was detected running on the remote machine."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-double-pulsar-backdoor.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-double-pulsar-backdoor.html"
---

Checks if the target machine is running the Double Pulsar SMB backdoor.
Based on the python detection script by Luke Jennings of Countercept.
 https://github.com/countercept/doublepulsar-detection-script
