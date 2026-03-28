---
title: "http-methods"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
shortDescription: "Finds out what options are supported by an HTTP server by sending an\nOPTIONS request. Lists potentially risky methods. It tests those methods\nnot mentioned in the OPTIONS headers individually and sees if they are\nimplemented. Any output other than 501/405 suggests that the method is\nif not in the range 400 to 600. If the response falls under that range then\nit is compared to the response from a randomly generated method."
risk: safe
tags:
  - "default"
  - "safe"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-methods <target>\nnmap --script http-methods --script-args http-methods.url-path='/website' <target>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-methods:"
  - "|_  Supported Methods: GET HEAD POST OPTIONS"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-methods.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-methods.html"
---

Finds out what options are supported by an HTTP server by sending an
OPTIONS request. Lists potentially risky methods. It tests those methods
not mentioned in the OPTIONS headers individually and sees if they are
implemented. Any output other than 501/405 suggests that the method is
if not in the range 400 to 600. If the response falls under that range then
it is compared to the response from a randomly generated method.
In this script, "potentially risky" methods are anything except GET,
HEAD, POST, and OPTIONS. If the script reports potentially risky
methods, they may not all be security risks, but you should check to
make sure. This page lists the dangers of some common methods:
http://www.owasp.org/index.php/Testing_for_HTTP_Methods_and_XST_%28OWASP-CM-008%29
The list of supported methods comes from the contents of the Allow and
Public header fields. In verbose mode, a list of all methods is printed,
followed by the list of potentially risky methods. Without verbose mode,
only the potentially risky methods are shown.
