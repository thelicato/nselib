---
title: "dicom-ping"
source: unofficial
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
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p4242 --script dicom-ping <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "4242/tcp open  dicom   syn-ack"
  - "| dicom-ping:"
  - "|   dicom: DICOM Service Provider discovered!"
  - "|_  config: Called AET check enabled"
author: "Paulino Calderon <calderon()calderonpale.com> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/dicom-ping.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to discover DICOM servers (DICOM Service Provider) through a partial C-ECHO request.
 It also detects if the server allows any called Application Entity Title or not.
The script responds with the message "Called AET check enabled" when the association request
 is rejected due configuration. This value can be bruteforced.
C-ECHO requests are commonly known as DICOM ping as they are used to test connectivity.
Normally, a 'DICOM ping' is formed as follows:
* Client -> A-ASSOCIATE request -> Server
* Server -> A-ASSOCIATE ACCEPT/REJECT -> Client
* Client -> C-ECHO request -> Server
* Server -> C-ECHO response -> Client
* Client -> A-RELEASE request -> Server
* Server -> A-RELEASE response -> Client
For this script we only send the A-ASSOCIATE request and look for the success code
 in the response as it seems to be a reliable way of detecting DICOM servers.
