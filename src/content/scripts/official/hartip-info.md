---
title: "hartip-info"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "This NSE script is used to send a HART-IP packet to a HART device that has TCP 5094 open.\nThe script will establish Session with HART device, then Read Unique Identifier and\nRead Long Tag packets are sent to parse the required HART device information.\nRead Sub-Device Identity Summary packet with Sub-Device index 00 01 is sent\nto request information on Sub-Device, if any available. If the response code\ndiffers from 0 (success), the error code is passed as Sub-Device Information.\nOtherwise, the required Sub-Device information is parsed from response packet."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap <host> -p 5094 --script hartip-info"
outputPreview:
  - "PORT     STATE SERVICE"
  - "5094/tcp open  hart-ip"
  - "| hartip-info:"
  - "|   Device Information:"
  - "|     IP Address: 172.16.10.90"
  - "|     Long Tag: ????????????????????????????????"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/hartip-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/hartip-info.html"
---

This NSE script is used to send a HART-IP packet to a HART device that has TCP 5094 open.
The script will establish Session with HART device, then Read Unique Identifier and
Read Long Tag packets are sent to parse the required HART device information.
Read Sub-Device Identity Summary packet with Sub-Device index 00 01 is sent
to request information on Sub-Device, if any available. If the response code
differs from 0 (success), the error code is passed as Sub-Device Information.
Otherwise, the required Sub-Device information is parsed from response packet.
Device/Sub-Device Information that is parsed includes Long Tag (user assigned device name),
Expanded Device Type, Manufacturer ID, Device ID, Device Revision, Software Revision,
HART Protocol Major Revision and Private Label Distributor.
This script was written based of HART Specifications available at
 https://www.fieldcommgroup.org/hart-specifications .
