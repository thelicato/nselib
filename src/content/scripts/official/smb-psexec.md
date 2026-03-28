---
title: "smb-psexec"
source: official
category: "Intrusive"
categories:
  - "intrusive"
shortDescription: "Implements remote process execution similar to the Sysinternals' psexec\ntool, allowing a user to run a series of programs on a remote machine and\nread the output. This is great for gathering information about servers,\nrunning the same tool on a range of system, or even installing a backdoor on\na collection of computers."
risk: intrusive
tags:
  - "intrusive"
  - "hostrule"
scriptTypes:
  - "hostrule"
protocols: []
ports: []
usage: "nmap --script smb-psexec.nse --script-args=smbuser=<username>,smbpass=<password>[,config=<config>] -p445 <host>\nsudo nmap -sU -sS --script smb-psexec.nse --script-args=smbuser=<username>,smbpass=<password>[,config=<config>] -p U:137,T:139 <host>"
outputPreview:
  - "Host script results:"
  - "|  smb-psexec:"
  - "|  |  Windows version"
  - "|  |  |_ Microsoft Windows 2000 [Version 5.00.2195]"
  - "|  |  IP Address and MAC Address from 'ipconfig.exe'"
  - "|  |  |  Ethernet adapter Local Area Connection 2:"
author: "Nmap Project"
reference:
  label: "View Official Script Source"
  url: "https://svn.nmap.org/nmap/scripts/smb-psexec.nse"
documentationUrl: "https://nmap.org/nsedoc/scripts/smb-psexec.html"
---

Implements remote process execution similar to the Sysinternals' psexec
tool, allowing a user to run a series of programs on a remote machine and
read the output. This is great for gathering information about servers,
running the same tool on a range of system, or even installing a backdoor on
a collection of computers.
This script can run commands present on the remote machine, such as ping or
tracert, or it can upload a program and run it, such as pwdump6 or a
backdoor. Additionally, it can read the program's stdout/stderr and return
it to the user (works well with ping, pwdump6, etc), or it can read a file
that the process generated (fgdump, for example, generates a file), or it
can just start the process and let it run headless (a backdoor might run
like this).
To use this, a configuration file should be created and edited. Several
configuration files are included that you can customize, or you can write
your own. This config file is placed in nselib/data/psexec (if
you aren't sure where that is, search your system for
 default.lua ), then is passed to Nmap as a script argument (for
example, myconfig.lua would be passed as
 --script-args=config=myconfig .
The configuration file consists mainly of a module list. Each module is
defined by a lua table, and contains fields for the name of the program, the
executable and arguments for the program, and a score of other options.
Modules also have an 'upload' field, which determines whether or not the
module is to be uploaded. Here is a simple example of how to run net
localgroup administrators , which returns a list of users in the
"administrators" group (take a look at the examples.lua
configuration file for these examples):

 mod = {}
 mod.upload = false
 mod.name = "Example 1: Membership of 'administrators'"
 mod.program = "net.exe"
 mod.args = "localgroup administrators"
 table.insert(modules, mod)

 mod.upload is false , meaning the program should
already be present on the remote system (since 'net.exe' is on every version
of Windows, this should be the case). mod.name defines the name
that the program will have in the output. mod.program and
 mod.args obviously define which program is going to be run. The
output for this script is this:
| Example 1: Membership of 'administrators'
 | | Alias name administrators
 | | Comment Administrators have complete and unrestricted access to the computer/domain
 | |
 | | Members
 | |
 | | -------------------------------------------------------------------------------
 | | Administrator
 | | ron
 | | test
 | | The command completed successfully.
 | |
 | |_

That works, but it's really ugly. In general, we can use
 mod.find , mod.replace , mod.remove ,
and mod.noblank to clean up the output. For this example, we're
going to use mod.remove to remove a lot of the useless lines,
and mod.noblank to get rid of the blank lines that we don't
want:
mod = {}
 mod.upload = false
 mod.name = "Example 2: Membership of 'administrators', cleaned"
 mod.program = "net.exe"
 mod.args = "localgroup administrators"
 mod.remove = {"The command completed", "%-%-%-%-%-%-%-%-%-%-%-", "Members", "Alias name", "Comment"}
 mod.noblank = true
 table.insert(modules, mod)

We can see that the output is now much cleaner:
| Example 2: Membership of 'administrators', cleaned
| | Administrator
| | ron
| |_test

For our next command, we're going to run Windows' ipconfig.exe, which
outputs a significant amount of unnecessary information, and what we do want
isn't formatted very nicely. All we want is the IP address and MAC address,
and we get it using mod.find and mod.replace :
mod = {}
 mod.upload = false
 mod.name = "Example 3: IP Address and MAC Address"
 mod.program = "ipconfig.exe"
 mod.args = "/all"
 mod.maxtime = 1
 mod.find = {"IP Address", "Physical Address", "Ethernet adapter"}
 mod.replace = {{"%. ", ""}, {"-", ":"}, {"Physical Address", "MAC Address"}}
 table.insert(modules, mod)

This module searches for lines that contain "IP Address", "Physical
Address", or "Ethernet adapter". In these lines, a ". " is replaced with
nothing, a "-" is replaced with a colon, and the term "Physical Address" is
replaced with "MAC Address" (arguably unnecessary). Run ipconfig /all
yourself to see what we start with, but here's the final output:
| Example 3: IP Address and MAC Address
| | Ethernet adapter Local Area Connection:
| | MAC Address: 00:0C:29:12:E6:DB
| |_ IP Address: 192.168.1.21| Example 3: IP Address and MAC Address

Another interesting part of this script is that variables can be used in any
script fields. There are two types of variables: built-in and user-supplied.
Built-in variables can be anything found in the config table,
most of which are listed below. The more interesting ones are:
$lhost : The address of the scanner

 $rhost : The address being scanned

 $path : The path where the scripts are uploaded

 $share : The share where the script was uploaded

User-supplied arguments are given on the commandline, and can be controlled
by mod.req_args in the configuration file. Arguments are given
by the user in --script-args; for example, to set $host to '1.2.3.4', the
user would pass in --script-args=host=1.2.3.4. To ensure the user passes in
the host variable, mod.req_args would be set to
 {'host'} .
Here is a module that pings the local ip address:
mod = {}
 mod.upload = false
 mod.name = "Example 4: Can the host ping our address?"
 mod.program = "ping.exe"
 mod.args = "$lhost"
 mod.remove = {"statistics", "Packet", "Approximate", "Minimum"}
 mod.noblank = true
 mod.env = "SystemRoot=c:\\WINDOWS"
 table.insert(modules, mod)

And the output:
 | Example 4: Can the host ping our address?
| | Pinging 192.168.1.100 with 32 bytes of data:
| | Reply from 192.168.1.100: bytes=32 time<1ms TTL=64
| | Reply from 192.168.1.100: bytes=32 time<1ms TTL=64
| | Reply from 192.168.1.100: bytes=32 time<1ms TTL=64
| |_Reply from 192.168.1.100: bytes=32 time<1ms TTL=64

And this module pings an arbitrary address that the user is expected to
give:
mod = {}
 mod.upload = false
 mod.name = "Example 5: Can the host ping $host?"
 mod.program = "ping.exe"
 mod.args = "$host"
 mod.remove = {"statistics", "Packet", "Approximate", "Minimum"}
 mod.noblank = true
 mod.env = "SystemRoot=c:\\WINDOWS"
 mod.req_args = {'host'}
 table.insert(modules, mod)

And the output (note that we had to up the timeout so this would complete;
we'll talk about override values later):
$ ./nmap -n -d -p445 --script=smb-psexec --script-args=smbuser=test,smbpass=test,config=examples,host=1.2.3.4 192.168.1.21
[...]
| Example 5: Can the host ping 1.2.3.4?
| | Pinging 1.2.3.4 with 32 bytes of data:
| | Request timed out.
| | Request timed out.
| | Request timed out.
| |_Request timed out.

For the final example, we'll use the upload command to upload
 fgdump.exe , run it, download its output file, and clean up its
logfile. You'll have to put fgdump.exe in the same folder as
the script for this to work:
mod = {}
 mod.upload = true
 mod.name = "Example 6: FgDump"
 mod.program = "fgdump.exe"
 mod.args = "-c -l fgdump.log"
 mod.url = "http://www.foofus.net/fizzgig/fgdump/"
 mod.tempfiles = {"fgdump.log"}
 mod.outfile = "127.0.0.1.pwdump"
 table.insert(modules, mod)

The -l argument for fgdump supplies the name of the logfile.
That file is listed in the mod.tempfiles field. What, exactly,
does mod.tempfiles do? It simply gives the service a list of
files to delete while cleaning up. The cleanup process will be discussed
later.
mod.url is displayed to the user if mod.program
isn't found in nselib/data/psexec/ . And finally,
 mod.outfile is the file that is downloaded from the system.
This is required because fgdump writes to an output file instead of to
stdout (pwdump6, for example, doesn't require mod.outfile .
Now that we've seen a few possible combinations of fields, I present a
complete list of all fields available and what each of them do. Many of them
will be familiar, but there are a few that aren't discussed in the examples:
upload (boolean) true if it's a local file to upload, false
 if it's already on the host machine. If
 upload is true, program has
 to be in nselib/data/psexec .

 name (string) The name to display above the output. If this
 isn't given, program .. args
 are used.

 program (string) If upload is false, the name
 (fully qualified or relative) of the program on the
 remote system; if upload is true, the
 name of the local file that will be uploaded (stored
 in nselib/data/psexec ).

 args (string) Arguments to pass to the process.

 env (string) Environmental variables to pass to the process,
 as name=value pairs, delimited, per Microsoft's spec, by
 NULL characters ( string.char(0) ).

 maxtime (integer) The approximate amount of time to wait for
 this process to complete. The total timeout for the
 script before it gives up waiting for a response is
 the total of all maxtime fields.

 extrafiles (string[]) Extra file(s) to upload before running
 the program. These will not be renamed (because,
 presumably, if they are then the program won't be
 able to find them), but they will be marked as
 hidden/system/etc. This may cause a race condition
 if multiple people are doing this at once, but
 there isn't much we can do. The files are also
 deleted afterwards as tempfiles would be. The
 files have to be in the same directory as programs
 ( nselib/data/psexec ), but the program
 doesn't necessarily need to be an uploaded one.

 tempfiles (string[]) A list of temporary files that the
 process is known to create (if the process does
 create files, using this field is recommended
 because it helps avoid making a mess on the remote
 system).

 find (string[]) Only display lines that contain the given
 string(s) (for example, if you're searching for a line
 that contains "IP Address", set this to {'IP
 Address'} . This allows Lua-style patterns, see:
 http://lua-users.org/wiki/PatternsTutorial (don't forget
 to escape special characters with a % ).
 Note that this is client-side only; the full output is
 still returned, the rest is removed while displaying.
 The line of output only needs to match one of the
 strings given here.

 remove (string[]) Opposite of find ; this removes
 lines containing the given string(s) instead of
 displaying them. Like find , this is
 client-side only and uses Lua-style patterns. If
 remove and find are in
 conflict, then remove takes priority.

 noblank (boolean) Setting this to true removes all blank
 lines from the output.

 replace (table) A table of values to replace in the strings
 returned. Like find and
 replace , this is client-side only and
 uses Lua-style patterns.

 headless (boolean) If headless is set to true,
 the program doesn't return any output; rather, it
 runs detached from the service so that, when the
 service ends, the program keeps going. This can be
 useful for, say, a monitoring program. Or a
 backdoor, if that's what you're into (a Metasploit
 payload should work nicely). Not compatible with:
 find , remove ,
 noblank , replace ,
 maxtime , outfile .

 enabled (boolean) Set to false, and optionally set
 disabled_message , if you don't want a
 module to run. Alternatively, you can comment out
 the process.

 disabled_message (string) Displayed if the module is disabled.

 url (string) A module where the user can download the
 uploadable file. Displayed if the uploadable file is
 missing.

 outfile (string) If set, the specified file will be returned
 instead of stdout.

 req_args (string[]) An array of arguments that the user must
 set in --script-args .
Any field in the configuration file can contain variables, as discussed.
Here are some of the available built-in variables:
$lhost : local IP address as a string.

 $lport : local port (meaningless; it'll change by the time the
 module is uploaded since multiple connections are
 made).

 $rhost : remote IP address as a string.

 $rport : remote port.

 $lmac : local MAC address as a string in the
 xx:xx:xx:xx:xx:xx format (note: requires root).

 $path : the path where the file will be uploaded to.

 $service_name : the name of the service that will be running
 this program

 $service_file : the name of the executable file for the
 service

 $temp_output_file : The (ciphered) file where the programs'
 output will be written before being
 renamed to $output_file

 $output_file : The final name of the (ciphered) output file.
 When this file appears, the script downloads it
 and stops the service

 $timeout : The total amount of time the script is going to run
 before it gives up and stops the process

 $share : The share that everything was uploaded to

 (script args): Any value passed as a script argument will be replaced (for
 example, if Nmap is run with
 --script-args=var3=10 , then $var3
 in any field will be replaced with 10 . See the
 req_args field above. Script argument values
 take priority over config values.

In addition to modules, the configuration file can also contain overrides.
Most of these aren't useful, so I'm not going to go into great detail.
Search smb-psexec.nse for any reference to the
 config table; any value in the config table can be
overridden with the overrides table in the module. The most
useful value to override is probably timeout .
Before and after scripts are run, and when there's an error, a cleanup is
performed. in the cleanup, we attempt to stop the remote processes, delete
all programs, output files, temporary files, extra files, etc. A lot of
effort was put into proper cleanup, since making a mess on remote systems is
a bad idea.
Now that I've talked at length about how to use this script, I'd like to
spend some time talking about how it works.
Running a script happens in several stages:
An open fileshare is found that we can write to. Finding an open
 fileshare basically consists of enumerating all shares and seeing which
 one(s) we have access to.

 A "service wrapper", and all of the uploadable/extra files, are uploaded.
 Before they're uploaded, the name of each file is obfuscated. The
 obfuscation completely renames the file, is unique for each source system,
 and doesn't change between multiple runs. This obfuscation has the benefit
 of preventing filenames from overlapping if multiple people are running this
 against the same computer, and also makes it more difficult to determine
 their purposes. The reason for keeping them consistent for every run is to
 make cleanup possible: a random filename, if the script somehow fails, will
 be left on the system.

 A new service is created and started. The new service has a random name
 for the same reason the files do, and points at the 'service wrapper'
 program that was uploaded.

 The service runs the processes. One by one, the processes are run and
 their output is captured. The output is obfuscated using a simple (and
 highly insecure) xor algorithm, which is designed to prevent casual sniffing
 (but won't deter intelligent attackers). This data is put into a temporary
 output file. When all the programs have finished, the file is renamed to the
 final output file

 The output file is downloaded, and the cleanup is performced. The file
 being renamed triggers the final stage of the program, where the data is
 downloaded and all relevant files are deleted.

 Output file, now decrypted, is formatted and displayed to the user.

And that's how it works!
Please post any questions, or suggestions for better modules, to
dev@nmap.org.
And, as usual, since this tool can be dangerous and can easily be viewed as
a malicious tool -- use this responsibly, and don't break any laws with it.
Some ideas for later versions (TODO):
