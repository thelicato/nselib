---
title: "ssl-enum-ciphers"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "intrusive"
shortDescription: "This script repeatedly initiates SSLv3/TLS connections, each time trying a new\ncipher or compressor while recording whether a host accepts or rejects it. The\nend result is a list of all the ciphersuites and compressors that a server accepts."
risk: intrusive
tags:
  - "discovery"
  - "intrusive"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script ssl-enum-ciphers -p 443 <host>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "443/tcp open  https   syn-ack"
  - "| ssl-enum-ciphers:"
  - "|   TLSv1.0:"
  - "|     ciphers:"
  - "|       TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (secp256r1) - A"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/ssl-enum-ciphers.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/ssl-enum-ciphers.html"
---

This script repeatedly initiates SSLv3/TLS connections, each time trying a new
cipher or compressor while recording whether a host accepts or rejects it. The
end result is a list of all the ciphersuites and compressors that a server accepts.
Each ciphersuite is shown with a letter grade (A through F) indicating the
strength of the connection. The grade is based on the cryptographic strength of
the key exchange and of the stream cipher. The message integrity (hash)
algorithm choice is not a factor. The output line beginning with
 Least strength shows the strength of the weakest cipher offered.
The scoring is based on the Qualys SSL Labs SSL Server Rating Guide, but does
not take protocol support (TLS version) into account, which makes up 30% of the
SSL Labs rating.
SSLv3/TLSv1 requires more effort to determine which ciphers and compression
methods a server supports than SSLv2. A client lists the ciphers and compressors
that it is capable of supporting, and the server will respond with a single
cipher and compressor chosen, or a rejection notice.
Some servers use the client's ciphersuite ordering: they choose the first of
the client's offered suites that they also support. Other servers prefer their
own ordering: they choose their most preferred suite from among those the
client offers. In the case of server ordering, the script makes extra probes to
discover the server's sorted preference list. Otherwise, the list is sorted
alphabetically.
The script will warn about certain SSL misconfigurations such as MD5-signed
certificates, low-quality ephemeral DH parameters, and the POODLE
vulnerability.
This script is intrusive since it must initiate many connections to a server,
and therefore is quite noisy.
It is recommended to use this script in conjunction with version detection
( -sV ) in order to discover SSL/TLS services running on unexpected
ports. For the most common SSL ports like 443, 25 (with STARTTLS), 3389, etc.
the script is smart enough to run on its own.
