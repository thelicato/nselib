---
title: "smtp-open-relay"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
  - "external"
shortDescription: "Attempts to relay mail by issuing a predefined combination of SMTP commands. The goal\nof this script is to tell if a SMTP server is vulnerable to mail relaying."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "external"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script smtp-open-relay.nse [--script-args smtp-open-relay.domain=<domain>,smtp-open-relay.ip=<address>,...] -p 25,465,587 <host>"
outputPreview:
  - "Host script results:"
  - "| smtp-open-relay: Server is an open relay (1/16 tests)"
  - "|_MAIL FROM:<antispam@insecure.org> -> RCPT TO:<relaytest@insecure.org>"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smtp-open-relay.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smtp-open-relay.html"
---

Attempts to relay mail by issuing a predefined combination of SMTP commands. The goal
of this script is to tell if a SMTP server is vulnerable to mail relaying.
An SMTP server that works as an open relay, is a email server that does not verify if the
user is authorised to send email from the specified email address. Therefore, users would
be able to send email originating from any third-party email address that they want.
The checks are done based in combinations of MAIL FROM and RCPT TO commands. The list is
hardcoded in the source file. The script will output all the working combinations that the
server allows if nmap is in verbose mode otherwise the script will print the number of
successful tests. The script will not output if the server requires authentication.
If debug is enabled and an error occurs while testing the target host, the error will be
printed with the list of any combinations that were found prior to the error.
