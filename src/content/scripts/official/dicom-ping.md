---
title: "dicom-ping"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "default"
  - "safe"
  - "auth"
shortDescription: "Attempts to discover DICOM servers (DICOM Service Provider) through a partial C-ECHO request.\n It also detects if the server allows any called Application Entity Title or not."
risk: safe
tags:
  - "discovery"
  - "default"
  - "safe"
  - "auth"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p4242 --script dicom-ping <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "4242/tcp open  dicom   syn-ack"
  - "| dicom-ping:"
  - "|   dicom: DICOM Service Provider discovered!"
  - "|_  config: Called AET check enabled"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dicom-ping.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dicom-ping.html"
---

Attempts to discover DICOM servers (DICOM Service Provider) through a partial C-ECHO request.
 It also detects if the server allows any called Application Entity Title or not.
The script responds with the message "Called AET check enabled" when the association request
 is rejected due configuration. This value can be bruteforced.
C-ECHO requests are commonly known as DICOM ping as they are used to test connectivity.
Normally, a 'DICOM ping' is formed as follows:

 Client -> A-ASSOCIATE request -> Server

 Server -> A-ASSOCIATE ACCEPT/REJECT -> Client

 Client -> C-ECHO request -> Server

 Server -> C-ECHO response -> Client

 Client -> A-RELEASE request -> Server

 Server -> A-RELEASE response -> Client

For this script we only send the A-ASSOCIATE request and look for the success code
 in the response as it seems to be a reliable way of detecting DICOM servers.
