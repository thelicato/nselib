---
title: "openvas-otp-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Performs brute force password auditing against a OpenVAS vulnerability scanner daemon using the OTP 1.0 protocol."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=openvas-otp-brute <target>"
outputPreview:
  - "PORT     STATE SERVICE    REASON  VERSION"
  - "9391/tcp open  ssl/openvas syn-ack"
  - "| openvas-otp-brute:"
  - "|   Accounts"
  - "|     openvas:openvas - Valid credentials"
  - "|   Statistics"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/openvas-otp-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/openvas-otp-brute.html"
---

Performs brute force password auditing against a OpenVAS vulnerability scanner daemon using the OTP 1.0 protocol.
