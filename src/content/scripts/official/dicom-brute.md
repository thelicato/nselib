---
title: "dicom-brute"
source: official
category: "Auth"
categories:
  - "auth"
  - "brute"
shortDescription: "Attempts to brute force the Application Entity Title of a DICOM server (DICOM Service Provider)."
risk: intrusive
tags:
  - "auth"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
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
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/dicom-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/dicom-brute.html"
---

Attempts to brute force the Application Entity Title of a DICOM server (DICOM Service Provider).
Application Entity Titles (AET) are used to restrict responses only to clients knowing the title. Hence,
 the called AET is used as a form of password.
