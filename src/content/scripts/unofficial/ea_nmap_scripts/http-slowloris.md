---
title: "http-slowloris"
source: unofficial
category: "Dos"
categories:
  - "dos"
  - "intrusive"
shortDescription: "Tests a web server for vulnerability to the Slowloris DoS attack."
risk: intrusive
tags:
  - "dos"
  - "intrusive"
  - "ea/nmap-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script http-slowloris --max-parallelism 400  <target>"
outputPreview:
  - "PORT     STATE SERVICE REASON  VERSION"
  - "80/tcp   open  http    syn-ack Apache httpd 2.2.20 ((Ubuntu))"
  - "| http-slowloris:"
  - "|   Vulnerable:"
  - "|   the DoS attack took +2m22s"
  - "|   with 501 concurrent connections"
author: "Aleksandar Nikolic, Ange Gutek (upstream: ea/nmap-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/ea/nmap-scripts/blob/master/http-slowloris.nse"
---

Imported from the upstream repository [ea/nmap-scripts](https://github.com/ea/nmap-scripts).
Tests a web server for vulnerability to the Slowloris DoS attack.
Slowloris was described at Defcon 17 by RSnake
(see http://ha.ckers.org/slowloris/).
This script opens and maintains numerous 'half-HTTP' connections until
the server runs out of ressources, leading to a denial of service. When
a successful DoS is detected, the script stops the attack and returns
these pieces of information (which may be useful to tweak further
filtering rules):
* Time taken until DoS
* Number of sockets used
* Number of queries sent
By default the script runs for 30 minutes if DoS is not achieved.
Please note that the number of concurrent connexions must be defined
with the <code>--max-parallelism</code> option (default is 20, suggested
is 400 or more) Also, be advised that in some cases this attack can
bring the web server down for good, not only while the attack is
running.
Also, due to OS limitations, the script is unlikely to work
when run from Windows.
