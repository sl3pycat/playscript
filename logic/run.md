Run
---
Executes JavaScript code.

executing raw js code:
```json
{
  "run":"alert('hello');"
}
```

executing a structured function:
```json
{
  "run":"alert",
  "params":["hello"]
}
```

**note** to run nested functions like `console.log()` just pass `console.log` to the run method.

---