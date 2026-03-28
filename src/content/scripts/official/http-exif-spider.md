---
title: "http-exif-spider"
source: official
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "Spiders a site's images looking for interesting exif data embedded in\n.jpg files. Displays the make and model of the camera, the date the photo was\ntaken, and the embedded geotag information."
risk: intrusive
tags:
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script http-exif-spider -p80,443 <host>"
outputPreview:
  - "PORT   STATE SERVICE REASON"
  - "80/tcp open  http    syn-ack"
  - "| http-exif-spider:"
  - "|   http://www.javaop.com/Nationalmuseum.jpg"
  - "|     Make: Canon"
  - "|     Model: Canon PowerShot S100\\xB4"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/http-exif-spider.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/http-exif-spider.html"
---

Spiders a site's images looking for interesting exif data embedded in
.jpg files. Displays the make and model of the camera, the date the photo was
taken, and the embedded geotag information.
