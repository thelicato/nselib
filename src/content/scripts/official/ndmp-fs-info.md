---
title: "ndmp-fs-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Lists remote file systems by querying the remote device using the Network\nData Management Protocol (ndmp). NDMP is a protocol intended to transport\ndata between a NAS device and the backup device, removing the need for the\ndata to pass through the backup server. The following products are known\nto support the protocol:\n\n Amanda\n\n Bacula\n\n CA Arcserve\n\n CommVault Simpana\n\n EMC Networker\n\n Hitachi Data Systems\n\n IBM Tivoli\n\n Quest Software Netvault Backup\n\n Symantec Netbackup\n\n Symantec Backup Exec"
risk: safe
tags:
  - "discovery"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 10000 --script ndmp-fs-info <ip>"
outputPreview:
  - "PORT      STATE SERVICE REASON  VERSION"
  - "10000/tcp open  ndmp    syn-ack Symantec/Veritas Backup Exec ndmp"
  - "| ndmp-fs-info:"
  - "| FS       Logical device          Physical device"
  - "| NTFS     C:                      Device0000"
  - "| NTFS     E:                      Device0000"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ndmp-fs-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ndmp-fs-info.html"
---

Lists remote file systems by querying the remote device using the Network
Data Management Protocol (ndmp). NDMP is a protocol intended to transport
data between a NAS device and the backup device, removing the need for the
data to pass through the backup server. The following products are known
to support the protocol:

 Amanda

 Bacula

 CA Arcserve

 CommVault Simpana

 EMC Networker

 Hitachi Data Systems

 IBM Tivoli

 Quest Software Netvault Backup

 Symantec Netbackup

 Symantec Backup Exec
