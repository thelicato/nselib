---
title: "nje-node-brute"
source: official
category: "Intrusive"
categories:
  - "intrusive"
  - "brute"
shortDescription: "z/OS JES Network Job Entry (NJE) target node name brute force."
risk: intrusive
tags:
  - "intrusive"
  - "brute"
  - "portrule"
scriptTypes:
  - "portrule"
protocols: []
ports: []
usage: "nmap -sV --script=nje-node-brute <target>\nnmap --script=nje-node-brute --script-args=hostlist=nje_names.txt -p 175 <target>"
outputPreview:
  - "PORT    STATE SERVICE REASON"
  - "175/tcp open  nje     syn-ack"
  - "| nje-node-brute:"
  - "|   Node Name:"
  - "|     POTATO:CACTUS - Valid credentials"
  - "|_  Statistics: Performed 6 guesses in 14 seconds, average tps: 0"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/nje-node-brute.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/nje-node-brute.html"
---

z/OS JES Network Job Entry (NJE) target node name brute force.
NJE node communication is made up of an OHOST and an RHOST. Both fields
must be present when conducting the handshake. This script attemtps to
determine the target systems NJE node name.
To initiate NJE the client sends a 33 byte record containing the type of
record, the hostname (RHOST), IP address (RIP), target (OHOST),
target IP (OIP) and a 1 byte response value (R) as outlined below:
0 1 2 3 4 5 6 7 8 9 A B C D E F
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| TYPE | RHOST |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| RIP | OHOST | OIP |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| R |
+-+-+

 TYPE: Can either be 'OPEN', 'ACK', or 'NAK', in EBCDIC, padded by spaces to make 8 bytes. This script always send 'OPEN' type.

 RHOST: Node name of the local machine initiating the connection. Set to 'FAKE'.

 RIP: Hex value of the local systems IP address. Set to '0.0.0.0'

 OHOST: The value being enumerated to determine the targets NJE node name.

 OIP: IP address, in hex, of the target system. Set to '0.0.0.0'.

 R: The response. NJE will send an 'R' of 0x01 if the OHOST is wrong or 0x04 if the OHOST is correct.

By default this script will attempt the brute force a mainframes OHOST. If supplied with
the argument nje-node-brute.ohost this script will attempt the bruteforce
the RHOST, setting OHOST to the value supplied to the argument.
Since most systems will only have one OHOST name, it is recommended to use the
 brute.firstonly script argument.
