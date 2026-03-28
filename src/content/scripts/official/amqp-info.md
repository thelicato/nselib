---
title: "amqp-info"
source: official
category: "Default"
categories:
  - "default"
  - "discovery"
  - "safe"
  - "version"
shortDescription: "Gathers information (a list of all server properties) from an AMQP (advanced message queuing protocol) server."
risk: safe
tags:
  - "default"
  - "discovery"
  - "safe"
  - "version"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap --script amqp-info -p5672 <target>"
outputPreview:
  - "5672/tcp open  amqp"
  - "| amqp-info:"
  - "|   capabilities:"
  - "|     publisher_confirms: YES"
  - "|     exchange_exchange_bindings: YES"
  - "|     basic.nack: YES"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/amqp-info.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/amqp-info.html"
---

Gathers information (a list of all server properties) from an AMQP (advanced message queuing protocol) server.
See http://www.rabbitmq.com/extensions.html for details on the
 server-properties field.
