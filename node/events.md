Node events
---
Executes json when an event is handled. Append the event name to an `on.` method.

example click event:
```json
{
  "add":"button",
  "set.text":"press me",
  "on.click":{"app.alert":"hello!"}
}
```

**note** events accept anything to be inserted to the target node, arrays are also accepted.

---