---
title: "http-virustotal"
source: official
category: "Safe"
categories:
  - "safe"
  - "malware"
  - "external"
shortDescription: "Checks whether a file has been determined as malware by Virustotal. Virustotal\nis a service that provides the capability to scan a file or check a checksum\nagainst a number of the major antivirus vendors. The script uses the public\nAPI which requires a valid API key and has a limit on 4 queries per minute.\nA key can be acquired by registering as a user on the virustotal web page:\n\n http://www.virustotal.com\n\nThe scripts supports both sending a file to the server for analysis or\nchecking whether a checksum (supplied as an argument or calculated from a\nlocal file) was previously discovered as malware."
risk: safe
tags:
  - "safe"
  - "malware"
  - "external"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script http-virustotal --script-args='http-virustotal.apikey=\"<key>\",http-virustotal.checksum=\"275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f\"'"
outputPreview:
  - "Pre-scan script results:"
  - "| http-virustotal:"
  - "|   Permalink: https://www.virustotal.com/file/275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f/analysis/1333633817/"
  - "|   Scan date: 2012-04-05 13:50:17"
  - "|   Positives: 41"
  - "|   digests"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-virustotal.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-virustotal.html"
---

Checks whether a file has been determined as malware by Virustotal. Virustotal
is a service that provides the capability to scan a file or check a checksum
against a number of the major antivirus vendors. The script uses the public
API which requires a valid API key and has a limit on 4 queries per minute.
A key can be acquired by registering as a user on the virustotal web page:

 http://www.virustotal.com

The scripts supports both sending a file to the server for analysis or
checking whether a checksum (supplied as an argument or calculated from a
local file) was previously discovered as malware.
As uploaded files are queued for analysis, this mode simply returns a URL
where status of the queued file may be checked.
