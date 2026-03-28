---
title: "rtsp-url-brute"
source: official
category: "Brute"
categories:
  - "brute"
  - "intrusive"
shortDescription: "Attempts to enumerate RTSP media URLS by testing for common paths on devices such as surveillance IP cameras."
risk: intrusive
tags:
  - "brute"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script rtsp-url-brute -p 554 <ip>"
outputPreview:
  - "PORT    STATE SERVICE"
  - "554/tcp open  rtsp"
  - "| rtsp-url-brute:"
  - "|   discovered:"
  - "|     rtsp://camera.example.com/mpeg4"
  - "|   other responses:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/rtsp-url-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/rtsp-url-brute.html"
---

Attempts to enumerate RTSP media URLS by testing for common paths on devices such as surveillance IP cameras.
The script attempts to discover valid RTSP URLs by sending a DESCRIBE
request for each URL in the dictionary. It then parses the response, based
on which it determines whether the URL is valid or not.
