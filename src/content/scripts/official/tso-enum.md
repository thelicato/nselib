---
title: "tso-enum"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "TSO User ID enumerator for IBM mainframes (z/OS). The TSO logon panel\ntells you when a user ID is valid or invalid with the message:\n IKJ56420I Userid <user ID> not authorized to use TSO ."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=tso-enum -p 23 <targets>"
outputPreview:
  - "PORT   STATE SERVICE VERSION"
  - "23/tcp open  tn3270  IBM Telnet TN3270"
  - "| tso-enum:"
  - "|   TSO User ID:"
  - "|     TSO User:RAZOR -  Valid User ID"
  - "|     TSO User:BLADE -  Valid User ID"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/tso-enum.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/tso-enum.html"
---

TSO User ID enumerator for IBM mainframes (z/OS). The TSO logon panel
tells you when a user ID is valid or invalid with the message:
 IKJ56420I Userid <user ID> not authorized to use TSO .
The TSO logon process can work in two ways:
1) You get prompted with IKJ56700A ENTER USERID -
 to which you reply with the user you want to use.
 If the user ID is valid it will give you a normal
 TSO logon screen. Otherwise it will give you the
 screen logon error above.
2) You're given the TSO logon panel and enter your user ID
 at the Userid ===> prompt. If you give
 it an invalid user ID you receive the error message above.
This script relies on the NSE TN3270 library which emulates a
TN3270 screen for NMAP.
TSO user IDs have the following rules:
 - it cannot begin with a number
 - only contains alpha-numeric characters and @, #, $.
 - it cannot be longer than 7 chars
