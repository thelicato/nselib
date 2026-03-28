---
title: "http-waf-detect"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Attempts to determine whether a web server is protected by an IPS (Intrusion Prevention System), IDS (Intrusion Detection System) or WAF (Web Application Firewall) by probing the web server with malicious payloads and detecting changes in the response code and body."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -p80 --script http-waf-detect <host>\nnmap -p80 --script http-waf-detect --script-args=\"http-waf-detect.aggro,http-waf-detect.uri=/testphp.vulnweb.com/artists.php\" www.modsecurity.org"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "|_http-waf-detect: IDS/IPS/WAF detected"
author: "Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/http-waf-detect.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to determine whether a web server is protected by an IPS (Intrusion Prevention System), IDS (Intrusion Detection System) or WAF (Web Application Firewall) by probing the web server with malicious payloads and detecting changes in the response code and body.
To do this the script will send a "good" request and record the response, afterwards it will match this response against new requests containing
malicious payloads. In theory, web applications shouldn't react to malicious requests because we are storing the payloads in a variable that is
not used by the script/file and only WAF/IDS/IPS should react to it.
If aggro mode is set, the script will try all attack vectors (More noisy)
This script can detect numerous IDS, IPS, and WAF products since
they often protect web applications in the same way.  But it
won't detect products which don't alter the http traffic.
Results can vary based on product configuration, but this script
has been tested to work against various configurations of the
following products:
* Apache ModSecurity
 * Barracuda Web Application Firewall
 * PHPIDS
 * dotDefender
 * Imperva Web Firewall
 * Blue Coat SG 400
