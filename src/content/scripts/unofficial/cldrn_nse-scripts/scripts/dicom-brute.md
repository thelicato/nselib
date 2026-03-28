---
title: "dicom-brute"
source: unofficial
category: "Auth"
categories:
  - "auth"
  - "brute"
shortDescription: "Attempts to brute force the Application Entity Title of a DICOM server (DICOM Service Provider)."
risk: intrusive
tags:
  - "auth"
  - "brute"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p4242 --script dicom-brute <target>"
outputPreview:
  - "PORT     STATE SERVICE        REASON"
  - "4242/tcp open  vrml-multi-use syn-ack"
  - "| dicom-brute:"
  - "|   Accounts:"
  - "|     Called Application Entity Title:ORTHANC - Valid credentials"
  - "|_  Statistics: Performed 5 guesses in 1 seconds, average tps: 5.0"
author: "Paulino Calderon <calderon()calderonpale.com> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/dicom-brute.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to brute force the Application Entity Title of a DICOM server (DICOM Service Provider).
Application Entity Titles (AET) are used to restrict responses only to clients knowing the title. Hence,
 the called AET is used as a form of password.
