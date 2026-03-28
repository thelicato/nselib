---
title: "mysql-vuln-cve2012-2122"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
  - "vuln"
shortDescription: "Attempts to bypass authentication in MySQL and MariaDB servers by exploiting CVE2012-2122. If its vulnerable, it will also attempt to dump the MySQL usernames and password hashes. All MariaDB and MySQL versions up to 5.1.61, 5.2.11, 5.3.5, 5.5.22 are\nvulnerable but depending if memcmp() returns an arbitrary integer outside of -128..127 range."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "vuln"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p3306 --script mysql-vuln-cve2012-2122 <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON"
  - "3306/tcp open  mysql   syn-ack"
  - "| mysql-vuln-cve2012-2122:"
  - "|   VULNERABLE:"
  - "|   Authentication bypass in MySQL servers."
  - "|     State: VULNERABLE"
author: "Paulino Calderon <calderon()websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/mysql-vuln-cve2012-2122.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to bypass authentication in MySQL and MariaDB servers by exploiting CVE2012-2122. If its vulnerable, it will also attempt to dump the MySQL usernames and password hashes. All MariaDB and MySQL versions up to 5.1.61, 5.2.11, 5.3.5, 5.5.22 are
vulnerable but depending if memcmp() returns an arbitrary integer outside of -128..127 range.
"When a user connects to MariaDB/MySQL, a token (SHA
over a password and a random scramble string) is calculated and compared
with the expected value. Because of incorrect casting, it might've
happened that the token and the expected value were considered equal,
even if the memcmp() returned a non-zero value. In this case
MySQL/MariaDB would think that the password is correct, even while it is
not.  Because the protocol uses random strings, the probability of
hitting this bug is about 1/256.
Which means, if one knows a user name to connect (and "root" almost
always exists), she can connect using *any* password by repeating
connection attempts. ~300 attempts takes only a fraction of second, so
basically account password protection is as good as nonexistent."
Original public advisory:
* http://seclists.org/oss-sec/2012/q2/493
Interesting post about this vuln:
* https://community.rapid7.com/community/metasploit/blog/2012/06/11/cve-2012-2122-a-tragically-comedic-security-flaw-in-mysql
