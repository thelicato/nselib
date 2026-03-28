---
title: "rdp-vuln-ms12-020"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "vuln"
shortDescription: "Checks if a machine is vulnerable to MS12-020 RDP vulnerability."
risk: intrusive
tags:
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=rdp-vuln-ms12-020 -p 3389 <target>"
outputPreview:
  - "PORT     STATE SERVICE        VERSION"
  - "3389/tcp open  ms-wbt-server?"
  - "| rdp-vuln-ms12-020:"
  - "|   VULNERABLE:"
  - "|   MS12-020 Remote Desktop Protocol Denial Of Service Vulnerability"
  - "|     State: VULNERABLE"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rdp-vuln-ms12-020.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rdp-vuln-ms12-020.html"
---

Checks if a machine is vulnerable to MS12-020 RDP vulnerability.
The Microsoft bulletin MS12-020 patches two vulnerabilities: CVE-2012-0152
which addresses a denial of service vulnerability inside Terminal Server, and
CVE-2012-0002 which fixes a vulnerability in Remote Desktop Protocol. Both are
part of Remote Desktop Services.
The script works by checking for the CVE-2012-0152 vulnerability. If this
vulnerability is not patched, it is assumed that CVE-2012-0002 is not patched
either. This script can do its check without crashing the target.
The way this works follows:

 Send one user request. The server replies with a user id (call it A) and a channel for that user.

 Send another user request. The server replies with another user id (call it B) and another channel.

 Send a channel join request with requesting user set to A and requesting channel set to B. If the server replies with a success message, we conclude that the server is vulnerable.

 In case the server is vulnerable, send a channel join request with the requesting user set to B and requesting channel set to B to prevent the chance of a crash.

References:

 http://technet.microsoft.com/en-us/security/bulletin/ms12-020

 http://support.microsoft.com/kb/2621440

 http://zerodayinitiative.com/advisories/ZDI-12-044/

 http://aluigi.org/adv/termdd_1-adv.txt

Original check by by Worawit Wang (sleepya).
