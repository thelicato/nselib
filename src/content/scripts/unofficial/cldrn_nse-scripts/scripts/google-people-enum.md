---
title: "google-people-enum"
source: unofficial
category: "Discovery"
categories:
  - "discovery"
  - "external"
shortDescription: "Attempts to enumerate valid email addresses using Google's Internal People API. If a valid email address is found, it\nalso grabs the display name and photo from the profile."
risk: informational
tags:
  - "discovery"
  - "external"
  - "cldrn/nmap-nse-scripts"
scriptTypes: []
protocols: []
ports: []
usage: "nmap -sn --script google-people-enum --script-args='username=<username>,password=<password>' <domain>"
outputPreview:
  - "Host script results:"
  - "| google-people-enum:"
  - "|   users:"
  - "|"
  - "|       user1@example.com:"
  - "|         photo: https://lh3.googleusercontent.com/XXXXXXXXXXXXX/photo.jpg"
author: "Aaron Velasco <avelasco@websec.mx>, Paulino Calderon <calderon@websec.mx> (upstream: cldrn/nmap-nse-scripts)"
reference:
  label: "View Upstream Script Source"
  url: "https://github.com/cldrn/nmap-nse-scripts/blob/master/scripts/google-people-enum.nse"
---

Imported from the upstream repository [cldrn/nmap-nse-scripts](https://github.com/cldrn/nmap-nse-scripts).
Attempts to enumerate valid email addresses using Google's Internal People API. If a valid email address is found, it
also grabs the display name and photo from the profile.
This script uses 'unpwdb' for username guessing but you can provide your own list (--script-args userdb=/tmp/user.lst).
A valid Google account must be provided to communicate with the API.
References:
https://developers.google.com/people/api/rest/
TODO:
* Implement OAUTH to replace username and password.
