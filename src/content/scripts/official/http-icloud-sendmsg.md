---
title: "http-icloud-sendmsg"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
  - "external"
shortDescription: "Sends a message to a iOS device through the Apple MobileMe web service. The\ndevice has to be registered with an Apple ID using the Find My Iphone\napplication."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "external"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap -sn -Pn --script http-icloud-sendmsg --script-args=\"username=<user>,password=<pass>,http-icloud-sendmsg.listdevices\"\nnmap -sn -Pn --script http-icloud-sendmsg --script-args=\"username=<user>,password=<pass>,deviceindex=1,subject='subject',message='hello world.',sound=false\""
outputPreview:
  - "Pre-scan script results:"
  - "| http-icloud-sendmsg:"
  - "|_  Message was successfully sent to \"Patrik Karlsson's iPhone\""
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-icloud-sendmsg.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-icloud-sendmsg.html"
---

Sends a message to a iOS device through the Apple MobileMe web service. The
device has to be registered with an Apple ID using the Find My Iphone
application.
