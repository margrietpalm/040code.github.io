---
slug:       "2019/08/15/please-a-bit-more-secure-shell"
title:      "Sign commits"
subtitle:   "Prove you git changes"
date:       2019-08-01
#cover:      ./evoluon.jpg
#coverDescription: "Evoluon"
#coverLink:   "https://goo.gl/maps/WPrtxowKszHqgLNw9"
asciinema:   false
#imageFb:    ./2019-07-01-multi-cloud-mesh-fb.png
#imageTw:    ./2019-07-01-multi-cloud-mesh-tw.png
type:        post
#comments:   true
tags: 
  - aws
  - shell
  - security
authors:
  - niek
---

Last week I became a happy owner of a new and fresh Mac. That it is a Mac is not even that important for this post. So I tasks my self with setting my system up a bit better, reproducible and more secure. 

Installing software packages is not hard anymore. Several package managers such as `brew` for Mac or `apt-get` for Ubuntu makes installing software a simple tasks already for years. 

Most of you configuration will be store in so called `dotfiles` also for handling dotfiles there are several good options out and many post can be found. I personally like to use [stow](https://www.gnu.org/software/stow/) to link my dotfiles. 


So once I had my software and main configuration installed only a few challenged related to protection and security are left. I never took simply the time to setup my Git configuration well. So two things were really missing, signing and handle multiple Git identities. So let's get them right this time.

## Signing my commits
Signing digital content is not a new topic, so I will keep it short. For signing your Git commits you need to setup GPG key. An easy way would be using [Keybase](https://keybase.io). And manage your GPG key via Keybase. A second option is to generate your GPG keys using GNU GPG. Another handy tool to let your GPG password store in Keychain is [GPG suite](https://gpgtools.org/).

### Generate or Import GPG keys
If you do not have a GPG key you need first to generate one. You can do this with the cli `gpg` or using a tool such as Keybase.

```bash
# Generate your GPG key
gpg --generate-key
```

If you would like to manage your GPG keys with Keybase you need to import the GPG key from Keybase into GNU GPG to use in your shell environment. 

```bash
# Export and import public key
keybase pgp export | gpg --import
# Export and import private key
keybase pgp export -s | gpg --allow-secret-key-import --import
```

### Verify
You can verify you imported or generated keys as follow
```bash
gpg --list-secret-keys
```
The result should look like as follow.

```
sec   rsa4096 2019-08-15 [SC] [expires: 2035-08-11]
      <KEY_ID>
uid           [ultimate] Your Name <you@yourdomain.com>
ssb   rsa4096 2019-08-15 [E] [expires: 2035-08-11]
```

If you key not marked as trust (or ultimate) but marked as unknown you have to edit your key and set the trust level. `gpg --edit-key`.

To get my GPG keys working with git I also set the `GPG_TTY` in my profile
```bash
export GPG_TTY=$(tty)
```

Finally we have to configure Git. First you need to export your key and upload the public signature for example to GitHub.
```bash
# Export you GPG key
gpg --armor --export <KEY_ID>
```
The last step is to configure Git. We have to tell Git which key to use. You can find the key id with `gpg --list-secret-keys`. 
```bash
git config --global user.signingkey
```
Now you are ready to sign your commits by adding the parameter `-S`. or configure Git to sign by default.
```bash
git config --global commit.gpgsign true
```