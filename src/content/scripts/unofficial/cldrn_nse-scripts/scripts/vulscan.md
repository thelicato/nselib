---
title: "vulscan"
source: unofficial
category: "Safe"
categories:
  - "safe"
  - "vuln"
shortDescription: "Attempts to discover vulnerabilities by matching information from the\nversion detection engine with databases such as CVE, ExploitDB and\nScipvuldb."
risk: safe
tags:
  - "safe"
  - "vuln"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap --script vulscan --script-args vulscan.updatedb=1 <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON  VERSION"
  - "25/tcp open  smtp    syn-ack Exim smtpd 4.69"
  - "| osvdb (22 findings):"
  - "| [2440] qmailadmin autorespond Multiple Variable Remote Overflow"
  - "| [3538] qmail Long SMTP Session DoS"
  - "| [5850] qmail RCPT TO Command Remote Overflow DoS"
author: "Marc Ruef <marc.ruef-at-computec.ch>, Jiayi Ye, Paulino Calderon (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/vulscan.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to discover vulnerabilities by matching information from the
version detection engine with databases such as CVE, ExploitDB and
Scipvuldb.
This script uses version information (-sV) to match product names with
vulnerability databases stored in Nmap's NSE data directory. The
databases are distributed separately, hence they need to be download
 manually before using the script. Optionally you may create empty
placeholder files and execute the script update functionality to populate
 the databases (--script-args updatedb).
The following databases are supported at the moment (in nselib/data/):
* Scipvuldb (http://www.scip.ch/en/?vuldb)
  Vulnerability feed URL: http://www.scip.ch/vuldb/scipvuldb.csv
* CVE (http://cve.mitre.org)
  Vulnerability feed URL: http://cve.mitre.org/data/downloads/allitems.csv
* ExploitDB (http://www.exploit-db.com)
  Vulnerability feed URL:
  https://raw.githubusercontent.com/offensive-security/exploit-database/master/files.csv
It is also possible to create and reference your own databases. This
requires to create a database file with the following structure:
<id>;<title>
Just execute vulscan like you would by refering to one of the pre-
delivered databases. Feel free to share your own database and
vulnerability connection with me, to add it to the official
repository.
Vulnerability detection of this script is only as good as Nmap version detection
and the vulnerability database entries are. Some databases do not
provide conclusive version information, which may lead to a lot of
false-positives.
REPORTING
It is possible to use another pre-defined report structure with the
script argument vulscanoutput. The supported output formats are:
* details
* listid
* listlink
* listtitle
You may enforce your own report structure by using a format string
 as follows:
* --script-args vulscanoutput='{link}\n{title}\n\n'
* --script-args vulscanoutput='ID: {id} - Title: {title} ({matches})\n'
* --script-args vulscanoutput='{id} | {product} | {version}\n'
The supported elements in a dynamic report template are:
* {id}      ID of the vulnerability
* {title}   Title of the vulnerability
* {matches} Count of matches
* {product} Matched product string(s)
* {version} Matched version string(s)
* {link}    Link to the vulnerability database entry
* \n        Newline
* \t        Tab
Every default database comes with an url and a link, which is used
during the scanning and might be accessed as {link} within the
customized report template. To use custom database links, use the
script argument 'vulscandblink':
* --script-args "vulscandblink=http://example.org/{id}"
Special credits go to Marc Ruef for creating the original vulscan script
 and maintaning the vulnerability database Scipvuldb.
