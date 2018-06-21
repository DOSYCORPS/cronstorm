# kairoi &mdash; everything has a time

Everything has a right time.  
To every thing a season.  
With kairoi that time is now.  
Or whenever you want it to be.  
To the ancient Greeks, kairoi meant "the right times", or "the fated times".  
But to you, kairoi means *"Time-as-a-Service"*.  

```shell/bash
kairoi every 3 second for 9 days get https://news.host.com
> OK 

kairoi every 1 second for 2 weeks post https://localhost --body={apple:true}
> OK 0af0fcdabe1e80f042ca02e49b8a0754a39801fd

kairoi every 1 day for 2 weeks put https://a.co \ 
  --body=apple=true&pair=falsea \ 
  --contentType=application/x-www-form-urlencoded
> OK 79a00d44133fe4a8034821729e5e1375c4710d7c

```

Shut it down

```shell/bash
kairoi end 0af0fcdabe1e80f042ca02e49b8a0754a39801fd
> OK

kairoi end 79a00d44133fe4a8034821729e5e1375c4710d7c
> OK
```

## Getting it

```shell/bash
npm i -g kairoi 
```

Some people need to use `sudo` with `-g`

## Free API keys

To try out kairoi you can use the following free API keys: `chronos` or `phanes`

If kairoi is still useful to you once those quotas are exhausted, [buy a key](https://api.pocketwatch.xyz).

## Authing In

```shell/bash
kairoi 
> Open this link in your browser: https://api.pocketwatch.xyz/
> Enter API key: 
> OK
```

## The right times

> Big things have small beginnings


```shell/bash
kairoi every 1 second for 10 weeks post https://localhost --body={"apple":1}
> OK <id>
```

> Everything that has a beginning  
> Has an end


```shell/bash
kairoi end <id>
> OK
```

### Show HN

[Show HN: kairoi - Time-as-a-service]()

### What's that?

[Just something from a film I liked](https://youtu.be/lrrpenD-Eg0?t=12s)

