Core methods
---

### Creating an element
Pass an element name to the `create` method to create an element and then add a `parent` method with a query selector to append it to a parent:
```json
{
 "create":"button",
 "set.text":"hello",
 "set.parent":"body"
}
```

or pass an element name to the `add` method to create and append it to the current or target parent.
```json
{
 "add":"button",
 "set.text":"hello"
}
```


---

 method | accepts | description 
--- | --- | --- 
`add` | Any | Creates a node and adds it to its parent. The value passed is treated as its children. 
 `on.*` | Any | Executes logic when an event is positive. 

