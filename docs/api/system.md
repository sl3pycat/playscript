System `sys.`
---

name | accepts | description
--- | --- | ---
`sys.alert` | Any | Alerts messages.
`sys.info` | Any | Logs info to the console.
`sys.log` | Any | Logs to the console.
`sys.warn` | Any | Logs warnings to the console.

example:
```json
{
  "sys.alert":"this is an alert",
  "sys.log":"this is a log",
  "sys.info":"this is a info log",
  "sys.warn":"this is a warning log"
}
```

**note** stack tracing for logs are inaccurate due to how the json is parsed.

---