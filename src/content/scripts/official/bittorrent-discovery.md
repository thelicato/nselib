---
title: "bittorrent-discovery"
source: official
category: "Discovery"
categories:
  - "discovery"
  - "safe"
shortDescription: "Discovers bittorrent peers sharing a file based on a user-supplied\ntorrent file or magnet link. Peers implement the Bittorrent protocol\nand share the torrent, whereas the nodes (only shown if the\ninclude-nodes NSE argument is given) implement the DHT protocol and\nare used to track the peers. The sets of peers and nodes are not the\nsame, but they usually intersect."
risk: safe
tags:
  - "discovery"
  - "safe"
  - "prerule"
scriptTypes:
  - "prerule"
protocols: []
ports: []
usage: "nmap --script bittorrent-discovery --script-args newtargets,bittorrent-discovery.torrent=<torrent_file>"
outputPreview:
  - "| bittorrent-discovery:"
  - "|   Peers:"
  - "|     97.88.178.168"
  - "|     89.100.184.36"
  - "|     86.185.55.212"
  - "|     Total of 3 peers discovered"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/bittorrent-discovery.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/bittorrent-discovery.html"
---

Discovers bittorrent peers sharing a file based on a user-supplied
torrent file or magnet link. Peers implement the Bittorrent protocol
and share the torrent, whereas the nodes (only shown if the
include-nodes NSE argument is given) implement the DHT protocol and
are used to track the peers. The sets of peers and nodes are not the
same, but they usually intersect.
If the newtargets script-arg is supplied it adds the discovered
peers as targets.
