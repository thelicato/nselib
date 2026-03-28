---
title: "smb-enum-domains"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "Attempts to enumerate domains on a system, along with their policies. This generally requires\ncredentials, except against Windows 2000. In addition to the actual domain, the \"Builtin\"\ndomain is generally displayed. Windows returns this in the list of domains, but its policies\ndon't appear to be used anywhere."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-enum-domains.nse -p445 <host>\nsudo nmap -sU -sS --script smb-enum-domains.nse -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "| smb-enum-domains:"
  - "|   WINDOWS2000"
  - "|     Groups: n/a"
  - "|     Users: Administrator, blah, Guest, testpass, ron, test, user"
  - "|     Creation time: 2009-10-17 12:45:47"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-enum-domains.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-enum-domains.html"
---

Attempts to enumerate domains on a system, along with their policies. This generally requires
credentials, except against Windows 2000. In addition to the actual domain, the "Builtin"
domain is generally displayed. Windows returns this in the list of domains, but its policies
don't appear to be used anywhere.
Much of the information provided is useful to a penetration tester, because it tells the
tester what types of policies to expect. For example, if passwords have a minimum length of 8,
the tester can trim his database to match; if the minimum length is 14, the tester will
probably start looking for sticky notes on people's monitors.
Another useful piece of information is the password lockouts. A penetration tester often wants
to know whether or not there's a risk of negatively impacting a network, and this will
indicate it. The SID is displayed, which may be useful in other tools; the users are listed,
which uses different functions than smb-enum-users.nse (though likely won't
get different results), and the date and time the domain was created may give some insight into
its history.
