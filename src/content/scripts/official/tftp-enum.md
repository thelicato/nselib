---
title: "tftp-enum"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Enumerates TFTP (trivial file transfer protocol) filenames by testing\nfor a list of common ones."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sU -p 69 --script tftp-enum.nse --script-args tftp-enum.filelist=customlist.txt <host>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "69/udp open  tftp    script-set"
  - "| tftp-enum:"
  - "|_  bootrom.ld"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/tftp-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/tftp-enum.html"
---

Enumerates TFTP (trivial file transfer protocol) filenames by testing
for a list of common ones.
TFTP doesn't provide directory listings. This script tries to retrieve
filenames from a list. The list is composed of static names from the
file tftplist.txt , plus configuration filenames for Cisco
devices that change based on the target address, of the form
 A.B.C.X-confg for an IP address A.B.C.D and for X in 0 to
255.
Use the tftp-enum.filelist script argument to search for
other static filenames.
This script is a reimplementation of tftptheft from
 http://code.google.com/p/tftptheft/ .
