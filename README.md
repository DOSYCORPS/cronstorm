# kairoi &mdash; opportune webhooks

"kairoi", plural of kairos (καιρός) is an Ancient Greek word meaning the right, critical, or opportune moment.

## When do you want to schedule webhooks?

> every second? 
```shell
kairoi every 1 second for 12 weeks PATCH https://api.example.com/ticker-price-cache
```
> every month?
```shell
kairoi every 1 month for 12 months post https://admin.example.com/payroll
```
> one time?
```shell
kairoi every 1 hour for 1 hour POST https://marketing.example.com/reply-mail
```
> nonsensically never?
```shell
kairoi every 1 hour for 1 minute head https://example.com/dev/null
```

## Getting it

```shell
npm i -g kairoi 
```

Some people need to use `sudo` with `-g`

## Time-as-a-Service

Everything has a right time.  
To every thing a season.  
With kairoi that time is now.  
Or whenever you want it to be.  
To the ancient Greeks, kairoi meant "the right times", or "the fated times".  
But to you, kairoi means *"Time-as-a-Service"*.  

## So when are the right times?

> Big things have small beginnings

```shell
kairoi every 1 second for 12 weeks \ 
  post https://app.io/new-customers \
  --body={"action":"greet", "allow":"push,email,sms"}
```

> Everything that has a beginning  
> Has an end


```shell
kairoi end abracadabraidentifier
```
### What's that?

[Just something from a film I liked](https://youtu.be/lrrpenD-Eg0?t=12s)

## Getting it (again)

```shell
npm i -g kairoi 
```

Some people need to use `sudo` with `-g`

## Free API keys :zap: :key: :surfer:

Yep really.

To try out kairoi you can use the following free API keys: `chronos` or `phanes`

If kairoi is still useful to you once those quotas are exhausted, [buy a key](https://api.pocketwatch.xyz).

## Authing In

If you want to change the key you use, Auth in.

```shell
kairoi auth
> Open this link in your browser: https://api.pocketwatch.xyz/
> Enter API key: 
```

## What kind of times does kairoi support?

> A time for GET:
```shell
kairoi every 3 second for 9 days \
  post https://news.host.com/api/rebuild-leaders
```

> a time for JSON POST:
```shell
kairoi every 1 second for 2 weeks \
  post https://app.co/new-churners \
  --body={action:"survey", allow:"email"}
```

> a time for anything:
```shell
kairoi every 1 day for 15 weeks put https://blog.me.com \ 
  --body='reminder=homework&reminder=exercise' \ 
  --contentType='application/x-www-form-urlencoded'
```

> and a time to be quiet. Shhhh:

```shell
kairoi end abracadarbraidentifier
```

### More help

```
kairoi --help
```

### Show HN

[Show HN: kairoi - Time-as-a-Service](https://news.ycombinator.com/item?id=17367877)

#### The End
