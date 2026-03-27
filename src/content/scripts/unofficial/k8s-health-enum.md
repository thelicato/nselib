---
title: k8s-health-enum
source: unofficial
category: Cloud
shortDescription: Probes Kubernetes-related health and metrics endpoints that are sometimes left exposed.
risk: informational
tags:
  - kubernetes
  - cloud
  - metrics
protocols:
  - tcp
ports:
  - "10250"
  - "10255"
  - "6443"
usage: nmap -p10250,10255,6443 --script k8s-health-enum <target>
outputPreview:
  - "/healthz: ok"
  - "/metrics: endpoint responded"
author: Community Maintainer
lastReviewed: "2026-03-27"
---

`k8s-health-enum` is a mock community script aimed at quickly identifying cluster-related endpoints that may be visible beyond their intended boundary.

It fits environments where container infrastructure needs a fast first-pass exposure check.
