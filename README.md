# playscript
A dynamic web app framework for writing UI, logic and styles completely in JSON with ✨flaire✨.

a hello world example:
```json
{
  "add.button":"press me",
  "on.click":{"app.alert":"Hello!"}
}
```

---
### Getting started
All you need to do is add a script tag pointing to the latest `ps.js` release and your good to go, everything else is handled for you till you want to handle it yourself.
```html
<html>
  <script src="../ps.min.js">
    {
      body:"hello world!"
    }
  </script>
</html>
```

---

### More docs
#### APIs
- [app](api/app.md)


#### Logic
- [run](logic/run.md)

#### Node
- [core](node/core.md)
- [events](node/events.md)
- [insert](node/insert.md)
- [set](node.set.md)
- [style](node/style.md)


#### Misc
- [todo](todo.md)

---