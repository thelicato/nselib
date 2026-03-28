---
title: "snmp-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Attempts to find an SNMP community string by brute force guessing."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU --script snmp-brute <target> [--script-args snmp-brute.communitiesdb=<wordlist> ]"
outputPreview:
  - "PORT    STATE SERVICE"
  - "161/udp open  snmp"
  - "| snmp-brute:"
  - "|   dragon - Valid credentials"
  - "|_  jordan - Valid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/snmp-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/snmp-brute.html"
---

Attempts to find an SNMP community string by brute force guessing.
This script opens a sending socket and a sniffing pcap socket in parallel
threads. The sending socket sends the SNMP probes with the community strings,
while the pcap socket sniffs the network for an answer to the probes. If
valid community strings are found, they are added to the creds database and
reported in the output.
The script takes the snmp-brute.communitiesdb argument that
allows the user to define the file that contains the community strings to
be used. If not defined, the default wordlist used to bruteforce the SNMP
community strings is nselib/data/snmpcommunities.lst . In case
this wordlist does not exist, the script falls back to
 nselib/data/passwords.lst
No output is reported if no valid account is found.
