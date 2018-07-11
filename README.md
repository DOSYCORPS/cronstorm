# CronStorm CLI &mdash; scalable job scheduling as a service

CronStorm CLI - calable job scheduling as a service. 

## Examples

Every second:

```shell
cronstorm \ 
  every 1 second \
  for 12 weeks \ 
  PATCH https://api.example.com/ticker-price-cache
```

Once a month:

```shell
cronstorm \ 
  every 1 month \ 
  for 12 months \
  post https://admin.example.com/payroll
```

Just once:

```shell
cronstorm \
  every 1 hour \
  for 1 hour \
  POST https://marketing.example.com/reply-mail
```

## Getting it

```shell
npm i -g cronstorm 
```

Some people need to use `sudo` with `-g`

## More usage

To start a job:

```shell
cronstorm every 1 second for 12 weeks \ 
  post https://app.io/new-customers \
  --body={"action":"greet", "allow":"push,email,sms"}
```

To stop a job:

```shell
cronstorm end <id>
```

## Authing In

If you want to change the key you use, Auth in.

```shell
cronstorm auth
> Open this link in your browser: https://cronstorm.com
> Enter API key: 
```

# What do you support?

For times cronstorm accepts second, minute, hour, day, week or month. 

For request types cronstorm accept get, head, post, put, patch.

## Supported request types

GET:

```shell
cronstorm every 3 second for 9 days \
  post https://news.host.com/api/rebuild-leaders
```

JSON POST:

```shell
cronstorm every 1 second for 2 weeks \
  post https://app.co/new-churners \
  --body={action:"survey", allow:"email"}
```

Anything:

```shell
cronstorm every 1 day for 15 weeks put https://blog.me.com \ 
  --body='reminder=homework&reminder=exercise' \ 
  --contentType='application/x-www-form-urlencoded'
```

### More help

```
cronstorm --help
```

### Show HN

