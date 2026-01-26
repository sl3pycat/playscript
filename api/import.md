API import
---
Imports playscript code and executes it on the target node.

```json
{
  "import":"/path/to/external_code.json"
}
```

**note** imports are async and in race mode, the script that loads first is executed first.

---