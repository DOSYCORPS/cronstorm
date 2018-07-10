# cronstorm CLI &mdash; scalable job scheduling as a service

## When do you want to schedule webhooks?

> every second? 
```shell
cronstorm every 1 second for 12 weeks PATCH https://api.example.com/ticker-price-cache
```
> every month?
```shell
cronstorm every 1 month for 12 months post https://admin.example.com/payroll
```
> one time?
```shell
cronstorm every 1 hour for 1 hour POST https://marketing.example.com/reply-mail
```
> nonsensically never?
```shell
cronstorm every 1 hour for 1 minute head https://example.com/dev/null
```

## Getting it

```shell
npm i -g cronstorm 
```

Some people need to use `sudo` with `-g`

## Time-as-a-Service

Everything has a right time.  
To every thing a season.  
With cronstorm that time is now.  
Or whenever you want it to be.  
To the ancient Greeks, cronstorm meant "the right times", or "the fated times".  
But to you, cronstorm means *"Time-as-a-Service"*.  

## So when are the right times?

> Big things have small beginnings

```shell
cronstorm every 1 second for 12 weeks \ 
  post https://app.io/new-customers \
  --body={"action":"greet", "allow":"push,email,sms"}
```

> Everything that has a beginning  
> Has an end


```shell
cronstorm end abracadabraidentifier
```
### What's that?

[Just something from a film I liked](https://youtu.be/lrrpenD-Eg0?t=12s)

## Getting it (again)

```shell
npm i -g cronstorm 
```

Some people need to use `sudo` with `-g`

## Free API keys :zap: :key: :surfer:

Yep really.

To try out cronstorm you can use the following free API keys: `chronos` or `phanes`

If cronstorm is still useful to you once those quotas are exhausted, [buy a key](https://api.pocketwatch.xyz).

## Authing In

If you want to change the key you use, Auth in.

```shell
cronstorm auth
> Open this link in your browser: https://api.pocketwatch.xyz/
> Enter API key: 
```

# What do you support?

You can specify times as second, minute, hour, day, week or month. 
We accept get, head, post, put, patch for HTTP methods. 

## What kind of times?

> A time for GET:
```shell
cronstorm every 3 second for 9 days \
  post https://news.host.com/api/rebuild-leaders
```

> a time for JSON POST:
```shell
cronstorm every 1 second for 2 weeks \
  post https://app.co/new-churners \
  --body={action:"survey", allow:"email"}
```

> a time for anything:
```shell
cronstorm every 1 day for 15 weeks put https://blog.me.com \ 
  --body='reminder=homework&reminder=exercise' \ 
  --contentType='application/x-www-form-urlencoded'
```

> and a time to be quiet. Shhhh:

```shell
cronstorm end abracadarbraidentifier
```

### More help

```
cronstorm --help
```

### Show HN

#### The End
