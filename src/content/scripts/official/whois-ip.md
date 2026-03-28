---
title: "whois-ip"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "external"
  - "safe"
shortDescription: "Queries the WHOIS services of Regional Internet Registries (RIR) and attempts to retrieve information about the IP Address\nAssignment which contains the Target IP Address."
risk: safe
tags:
  - "discovery"
  - "external"
  - "safe"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "# Basic usage:\nnmap target --script whois-ip\n\n# To prevent the use of IANA assignments data supply the nofile value\n# to the whodb argument:\nnmap target --script whois-ip --script-args whodb=nofile\nnmap target --script whois-ip --script-args whois.whodb=nofile\n\n# Supplying a sequence of whois services will also prevent the use of\n# IANA assignments data and override the default sequence:\nnmap target --script whois-ip --script-args whodb=arin+ripe+afrinic\nnmap target --script whois-ip --script-args whois.whodb=apnic*lacnic\n# The order in which the services are supplied is the order in which\n# they will be queried. (N.B. commas or semi-colons should not be\n# used to delimit argument values.)\n\n# To return the first record obtained even if it contains a referral\n# to another service, supply the nofollow value to whodb:\nnmap target --script whois-ip --script-args whodb=nofollow\nnmap target --script whois-ip --script-args whois.whodb=nofollow+ripe\n# Note that only one service (the first one supplied) will be used in\n# conjunction with nofollow.\n\n# To ensure discovery of smaller assignments even if larger ones\n# exist in the cache, supply the nocache value to whodb:\nnmap target --script whois-ip --script-args whodb=nocache\nnmap target --script whois-ip --script-args whois.whodb=nocache"
outputPreview:
  - "Host script results:"
  - "|  whois-ip: Record found at whois.arin.net"
  - "|  netrange: 64.13.134.0 - 64.13.134.63"
  - "|  netname: NET-64-13-143-0-26"
  - "|  orgname: Titan Networks"
  - "|  orgid: INSEC"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/whois-ip.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/whois-ip.html"
---

Queries the WHOIS services of Regional Internet Registries (RIR) and attempts to retrieve information about the IP Address
Assignment which contains the Target IP Address.
The fields displayed contain information about the assignment and the organisation responsible for managing the address
space. When output verbosity is requested on the Nmap command line ( -v ) extra information about the assignment will
be displayed.
To determine which of the RIRs to query for a given Target IP Address this script utilises Assignments Data hosted by IANA.
The data is cached locally and then parsed for use as a lookup table. The locally cached files are refreshed periodically
to help ensure the data is current. If, for any reason, these files are not available to the script then a default sequence
of Whois services are queried in turn until: the desired record is found; or a referral to another (defined) Whois service is
found; or until the sequence is exhausted without finding either a referral or the desired record.
The script will recognize a referral to another Whois service if that service is defined in the script and will continue by
sending a query to the referred service. A record is assumed to be the desired one if it does not contain a referral.
To reduce the number unnecessary queries sent to Whois services a record cache is employed and the entries in the cache can be
applied to any targets within the range of addresses represented in the record.
In certain circumstances, the ability to cache responses prevents the discovery of other, smaller IP address assignments
applicable to the target because a cached response is accepted in preference to sending a Whois query. When it is important
to ensure that the most accurate information about the IP address assignment is retrieved the script argument whodb
should be used with a value of "nocache" (see script arguments). This reduces the range of addresses that may use a
cached record to a size that helps ensure that smaller assignments will be discovered. This option should be used with caution
due to the potential to send large numbers of whois queries and possibly be banned from using the services.
In using this script your IP address will be sent to iana.org. Additionally
your address and the address of the target of the scan will be sent to one of
the RIRs.
