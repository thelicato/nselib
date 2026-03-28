---
title: "297-bittorrent-report"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "This script is an adaptation of <bittorent-discovery.nse> and can be used\nto retrieve the number of [seeders] and [leeches] for a variable number of\n.torrent files. User must specify the root directory then the script will\nrecursively load and test each .torrent file found.\nDHT discovery will not be performed and no target machine will be investigated\nfor open ports. IPs read from communicated data can be printed on standard\noutput using the -d debug feature (or -v).\nThe idea is to have a statistic of data available/requested. A report is\nprinted on standard output, a list of files and their values.\nNote: HTTP values are guessed and may be incorrect."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "chinarulezzz/nmap-extra-nse"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script bittorrent-report --script-args bittorrent-report.rdir=<directory path>,bittorrent-report.blist=<file path>"
outputPreview:
  - "| bittorrent-report:"
  - "|   [c:\\_ROOTDIR_\\FILENAME_1.torrent]                           seeders[8]    leeches[3]"
  - "|   [c:\\_ROOTDIR_\\FILENAME_2.torrent]                           seeders[2]    leeches[2]"
  - "|   [c:\\_ROOTDIR_\\_LEVEL_1_\\FILENAME_3.torrent]                 seeders[1]    leeches[4]"
  - "|   [c:\\_ROOTDIR_\\_LEVEL_1_\\FILENAME_4.torrent]                 seeders[0]    leeches[1]"
  - "|   [c:\\_ROOTDIR_\\_LEVEL_1_\\_LEVEL_1A_\\FILENAME_5.torrent]      seeders[4]    leeches[2]"
author: "Antonio de Curtis (upstream: chinarulezzz/nmap-extra-nse)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/chinarulezzz/nmap-extra-nse/blob/master/297-bittorrent-report.nse"
---

Imported from the upstream repository [chinarulezzz/nmap-extra-nse](https://github.com/chinarulezzz/nmap-extra-nse).
This script is an adaptation of <bittorent-discovery.nse> and can be used
to retrieve the number of [seeders] and [leeches] for a variable number of
.torrent files. User must specify the root directory then the script will
recursively load and test each .torrent file found.
DHT discovery will not be performed and no target machine will be investigated
for open ports. IPs read from communicated data can be printed on standard
output using the -d debug feature (or -v).
The idea is to have a statistic of data available/requested. A report is
printed on standard output, a list of files and their values.
Note: HTTP values are guessed and may be incorrect.
