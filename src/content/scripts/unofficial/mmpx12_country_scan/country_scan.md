---
title: "country_scan"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
shortDescription: "Scan by country."
risk: informational
tags:
  - "discovery"
  - "mmpx12/nse-country-scan"
scriptTypes: []
protocols: []
ports: []
usage: ""
outputPreview: []
author: "Dr Claw (upstream: mmpx12/nse-country-scan)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/mmpx12/nse-country-scan/blob/master/country_scan.nse"
---

Imported from the upstream repository [mmpx12/nse-country-scan](https://github.com/mmpx12/nse-country-scan).
Scan a whole country with nmap

## Installation

```bash
git clone https://github.com/mmpx12/nse-country-scan.git
cd nse-country-scan
sudo make
```

## usage

If no argument is pass the script while choose a random country and scan all the ips
Argument are:

- country: "Code of the country in uppercase">
- max_ip: "Number of ip range to scan"
- newtargets "Without nmap can't add target to queue"

```bash
nmap --script country_scan --script-args 'country=LU, max_ip=2'
# This whill scan 2 range of ip and not 2 ip only
# You can see which one with `HEAD -2 /usr/share/nmap/nselib/country/list/LU`
```

Other ip, script or nmap argument can be pass like:

```bash
nmap -sn --script country_scan --script-args 'country=LU, max_ip=2, newtargets' 1.1.1.1
```


## Delete

For deleting this script run:

```bash
cd nse-country-scan
sudo make clean
```
