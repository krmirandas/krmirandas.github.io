---
id: regex
title: Regex y enums
---

## Regular Expression

```yaml
alphanumeric: /^[a-zA-Z0-9]*$/
alphanumeric_extended: /^[a-zA-Z0-9 ]*$/
international_phone_format: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/
email_regex: /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
url_protocol_optional: /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/
url_protocol: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/
time: ^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$
date_format: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
password_complex: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;<>,.\/?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
password_moderate: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
```
## Enumerations

### positionRelativeToParent (Board)

```yaml
next 
up
down
```
### status (Board)

```yaml
active
paused
finished
```

### paymentStatus (Organization)

```yaml
active
pending
```

### priority (Alerts)

```yaml
low
medium
high
```

### recurrence (Plan)

```yaml
monthly
yearly
```

### type (Documents)

```yaml
link
file
```