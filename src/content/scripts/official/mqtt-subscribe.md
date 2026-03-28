---
title: "mqtt-subscribe"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
  - "version"
shortDescription: "Dumps message traffic from MQTT brokers."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -p 1883 --script mqtt-subscribe <target>"
outputPreview:
  - "PORT     STATE SERVICE                 REASON"
  - "1883/tcp open  mosquitto version 1.4.8 syn-ack"
  - "| mqtt-subscribe:"
  - "|   Topics and their most recent payloads:"
  - "|     $SYS/broker/load/publish/received/5min: 0.27"
  - "|     $SYS/broker/publish/messages/received: 7"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/mqtt-subscribe.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/mqtt-subscribe.html"
---

Dumps message traffic from MQTT brokers.
This script establishes a connection to an MQTT broker and subscribes
to the requested topics. The default topics have been chosen to
receive system information and all messages from other clients. This
allows Nmap, to listen to all messages being published by clients to
the MQTT broker.
