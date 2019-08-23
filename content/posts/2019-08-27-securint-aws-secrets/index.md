---
slug:       "2019/08/15/please-a-bit-more-secure-shell"
title:      "Avoiding secrets in plain text"
subtitle:   "Please a bit more security in my cli"
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

So once I had my software and main configuration installed only a few challenged related to protection and security are left. First I would like to sign my GIT commits. Secondly I would find a solution for handling all kind of secrets that on my systems end up in plain text file. Quite crazy nowadays, now using a password manager is becoming quite common. But the challenge is always to find a solution that is secure and also works.

## Please no plain secrets
I am using AWS a lot, and unfortunately AWS has not a very good solution to store your secrets encrypted, or even avoid storing them at all. Using secrets in the environment is quite common for many systems. And on your production systems we use typically a system like Vault to keep the secrets secure. 

For handling my secrets locally I choose [pass] a command line password manager to keep my secrets secure. 

### Setup command line password store
After installing pass via brew or any other package manager you need to initialize you password store. Pass requires a GPG key encrypted you password. Would be logical to use a key with a password.
```
pass init <GPG_KEY>
```
Next you can start adding your keys to the password store. For example your AWS keys can added as follow.

```bash
pass insert blog/ws-access-key-id
pass insert blog/aws-access-secret
```
With `pass ls` you can list the entries in your store.

```
├── blog
│   ├── aws-access-key-id
│   ├── aws-access-secret
```


### Using your secrets
Using your secrets is straightforward. You can retrieve a secret as follow `pass blog/aws-access-key-id`. You can start using the AWS cli by setting your access key and secret as follow.

```bash
export AWS_ACCESS_KEY_ID=$(pass blog/aws-access-key-id)
export AWS_SECRET_ACCESS_KEY=$(pass blog/aws-access-secret)
```

Verify your setup by getting you account id `aws sts get-caller-identity`.

So this works but using it is quite cumbersome. And becomes even harder if you would like to use MFA. For MFA you have first to set an access key and secret to obtain your MFA session. To give an impressions you need to execute the following commands to setup you environment to use MFA>

```
session=$(aws sts get-session-token --serial-number \
  arn:aws:iam::123456789:mfa/me --token-code 1234)
echo $session
```

You will get response like below which you can parse with `jq` to set the sessions details in your shell.
```
{
    "Credentials": {
        "AccessKeyId": "TMP_ACCESS_KEY",
        "SecretAccessKey": "TMP_SECRET",
        "SessionToken": "SESSION_TOKEN",
        "Expiration": "2019-08-24T03:01:03Z"
    }
}
```

Set the environment variables.
```bash
export AWS_SESSION_TOKEN=$(echo $session | jq -r '.Credentials.SessionToken')
export AWS_SECRET_ACCESS_KEY=$(echo $session | jq -r '.Credentials.SecretAccessKey')
export AWS_ACCESS_KEY_ID=$(echo $session | jq -r '.Credentials.AccessKeyId')
```

So we have now secured our setup but executing those commands for each new shell would be horrible. So I have wrapped the commands show here to a set of simple bash function. 

```bash
source aws-auth-utils.sh

# Insert secrets for your aws accountX into pass.
aws-pass-insert-access-keys accountX
aws-pass-insert-mfa accountX

# create a MFA session 
aws-mfa-login accountX 123456

# verify you can access your account:
aws sts get-caller-identity
```