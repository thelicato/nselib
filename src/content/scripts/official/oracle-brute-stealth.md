---
title: "oracle-brute-stealth"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "Exploits the CVE-2012-3137 vulnerability, a weakness in Oracle's\nO5LOGIN authentication scheme. The vulnerability exists in Oracle 11g\nR1/R2 and allows linking the session key to a password hash. When\ninitiating an authentication attempt as a valid user the server will\nrespond with a session key and salt. Once received the script will\ndisconnect the connection thereby not recording the login attempt.\nThe session key and salt can then be used to brute force the users\npassword."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script oracle-brute-stealth -p 1521 --script-args oracle-brute-stealth.sid=ORCL <host>"
outputPreview:
  - "PORT     STATE  SERVICE REASON"
  - "1521/tcp open  oracle  syn-ack"
  - "| oracle-brute-stealth:"
  - "|   Accounts"
  - "|     dummy:$o5logon$1245C95384E15E7F0C893FCD1893D8E19078170867E892CE86DF90880E09FAD3B4832CBCFDAC1A821D2EA8E3D2209DB6*4202433F49DE9AE72AE2 - Hashed valid or invalid credentials"
  - "|     nmap:$o5logon$D1B28967547DBA3917D7B129E339F96156C8E2FE5593D42540992118B3475214CA0F6580FD04C2625022054229CAAA8D*7BCF2ACF08F15F75B579 - Hashed valid or invalid credentials"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/oracle-brute-stealth.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/oracle-brute-stealth.html"
---

Exploits the CVE-2012-3137 vulnerability, a weakness in Oracle's
O5LOGIN authentication scheme. The vulnerability exists in Oracle 11g
R1/R2 and allows linking the session key to a password hash. When
initiating an authentication attempt as a valid user the server will
respond with a session key and salt. Once received the script will
disconnect the connection thereby not recording the login attempt.
The session key and salt can then be used to brute force the users
password.
