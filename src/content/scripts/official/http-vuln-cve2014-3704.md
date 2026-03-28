---
title: "http-vuln-cve2014-3704"
source: official
category: "Vuln"
categories:
  - "vuln"
  - "intrusive"
  - "exploit"
shortDescription: "Exploits CVE-2014-3704 also known as 'Drupageddon' in Drupal. Versions < 7.32\nof Drupal core are known to be affected."
risk: intrusive
tags:
  - "vuln"
  - "intrusive"
  - "exploit"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-vuln-cve2014-3704 --script-args http-vuln-cve2014-3704.cmd=\"uname -a\",http-vuln-cve2014-3704.uri=\"/drupal\" <target>\nnmap --script http-vuln-cve2014-3704 --script-args http-vuln-cve2014-3704.uri=\"/drupal\",http-vuln-cve2014-3704.cleanup=false <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-vuln-cve2014-3704:"
  - "|   VULNERABLE:"
  - "|   Drupal - pre Auth SQL Injection Vulnerability"
  - "|     State: VULNERABLE (Exploitable)"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2014-3704.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2014-3704.html"
---

Exploits CVE-2014-3704 also known as 'Drupageddon' in Drupal. Versions < 7.32
of Drupal core are known to be affected.
Vulnerability allows remote attackers to conduct SQL injection attacks via an
array containing crafted keys.
The script injects new Drupal administrator user via login form and then it
attempts to log in as this user to determine if target is vulnerable. If that's
the case following exploitation steps are performed:
PHP filter module which allows embedded PHP code/snippets to be evaluated is enabled,

 permission to use PHP code for administrator users is set,

 new article which contains payload is created & previewed,

 cleanup: by default all DB records that were added/modified by the script are restored.

Vulnerability originally discovered by Stefan Horst from SektionEins.
Exploitation technique used to achieve RCE on the target is based on exploit/multi/http/drupal_drupageddon Metasploit module.
