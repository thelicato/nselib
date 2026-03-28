---
title: "qscan"
source: official
category: "Safe"
categories:
  - "safe"
  - "discovery"
shortDescription: "Repeatedly probe open and/or closed ports on a host to obtain a series\nof round-trip time values for each port. These values are used to\ngroup collections of ports which are statistically different from other\ngroups. Ports being in different groups (or \"families\") may be due to\nnetwork mechanisms such as port forwarding to machines behind a NAT."
risk: safe
tags:
  - "safe"
  - "discovery"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script qscan --script-args qscan.confidence=0.95,qscan.delay=200ms,qscan.numtrips=10 target"
outputPreview:
  - "| qscan:"
  - "| PORT  FAMILY  MEAN (us)  STDDEV  LOSS (%)"
  - "| 21    0       2082.70    460.72  0.0%"
  - "| 22    0       2211.70    886.69  0.0%"
  - "| 23    1       4631.90    606.67  0.0%"
  - "| 24    0       1922.40    336.90  0.0%"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/qscan.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/qscan.html"
---

Repeatedly probe open and/or closed ports on a host to obtain a series
of round-trip time values for each port. These values are used to
group collections of ports which are statistically different from other
groups. Ports being in different groups (or "families") may be due to
network mechanisms such as port forwarding to machines behind a NAT.
In order to group these ports into different families, some statistical
values must be computed. Among these values are the mean and standard
deviation of the round-trip times for each port. Once all of the times
have been recorded and these values have been computed, the Student's
t-test is used to test the statistical significance of the differences
between each port's data. Ports which have round-trip times that are
statistically the same are grouped together in the same family.
This script is based on Doug Hoyte's Qscan documentation and patches
for Nmap.
