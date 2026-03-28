---
title: "ssl-cert"
source: official
category: "Default"
categories:
  - "default"
  - "safe"
  - "discovery"
shortDescription: "Retrieves a server's SSL certificate. The amount of information printed about\nthe certificate depends on the verbosity level. With no extra verbosity, the\nscript prints the validity period and the commonName, organizationName,\nstateOrProvinceName, and countryName of the subject. When present, it also\noutputs all the subject alternative names."
risk: safe
tags:
  - "default"
  - "safe"
  - "discovery"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV -sC <target>"
outputPreview:
  - "443/tcp open  https"
  - "| ssl-cert: Subject: commonName=www.paypal.com/organizationName=PayPal, Inc."
  - "/stateOrProvinceName=California/countryName=US"
  - "| Subject Alternative Name: DNS:www.paypal.com, DNS:fastlane.paypal.com,"
  - "DNS:secure.paypal.com, DNS:www-st.paypal.com, DNS:connect.paypal.com,"
  - "..."
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssl-cert.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssl-cert.html"
---

Retrieves a server's SSL certificate. The amount of information printed about
the certificate depends on the verbosity level. With no extra verbosity, the
script prints the validity period and the commonName, organizationName,
stateOrProvinceName, and countryName of the subject. When present, it also
outputs all the subject alternative names.
443/tcp open https
| ssl-cert: Subject: commonName=www.paypal.com/organizationName=PayPal, Inc.
/stateOrProvinceName=California/countryName=US
| Subject Alternative Name: DNS:www.paypal.com, DNS:fastlane.paypal.com,
DNS:secure.paypal.com, DNS:www-st.paypal.com, DNS:connect.paypal.com,
...
DNS:es.paypal-qrc.com, DNS:www.fastlane.paypal.com
| Not valid before: 2024-02-08T00:00:00
|_Not valid after: 2025-02-08T23:59:59

With -v it adds the issuer name and fingerprints.
443/tcp open https
| ssl-cert: Subject: commonName=www.paypal.com/organizationName=PayPal, Inc.
/stateOrProvinceName=California/countryName=US
| Subject Alternative Name: DNS:www.paypal.com, DNS:fastlane.paypal.com,
DNS:secure.paypal.com, DNS:www-st.paypal.com, DNS:connect.paypal.com,
...
DNS:es.paypal-qrc.com, DNS:www.fastlane.paypal.com
| Issuer: commonName=DigiCert SHA2 Extended Validation Server CA
/organizationName=DigiCert Inc/countryName=US/organizationalUnitName=www.digicert.com
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2024-02-08T00:00:00
| Not valid after: 2025-02-08T23:59:59
| MD5: 7cc7 a345 a164 dfb1 4690 0277 a540 f636
| SHA-1: 9269 a100 8f61 aa60 1706 fc85 fd47 d277 66c0 f591
|_SHA-256: d76b 791c e89c 043a c25d 19f3 97b2 91d5 5d94 b1c2 72df 8d1f 4bab fdc1 91a7 413b

With -vv it adds the PEM-encoded contents of the entire
certificate.
