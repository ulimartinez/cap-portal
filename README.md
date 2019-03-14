# CA(P)ESAR PORTAL

This project is a captive portal for network authentication that uses [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) for logging in.

![screenshot](cap.png?raw=true "Screenshot")

Instalation
------------------------------------------
Prerequesite

In order for your captive portal to work, you need to set it up in your firewall and have the authentication type as users. create users using the decoded message as username and the encoded cipher as a password. You may also need to enable multiple connections for the users so that multiple devices can connect with the same credentials.

Building

```bash
$ npm install
$ npm build
```

Get the index.html and app.bundle.js files to use in your firewall configuration


Customize
------------------------------------------
You can customize the cipher by editing the `secrets` array in index.js

```javascript
let secrets = [
    {
        "secret": "$ENCODED CIPHER$",
        "n": $SHIFT_NUMBER$
    },
    ...
];
```
