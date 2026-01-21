Styling
---

### Setting target styles
There are multiple ways of adding styles to your element:

Setting styles the regular way.
```json
{
  "style":"color:white;background:black"
}
```

Setting styles the psjs way
```json
{
  "style":{
    "color":"white",
    "background":"black"
  }
}
```

Setting styles the inline way
```json
{
  "style.color":"white",
  "style.background":"black"
}
```

---

### Setting global styles
Just add a style element with its attributes being the styles its supposed to perform:

```json
{
  "style":"button",
  "background":"black",
  "color":"white"
}
```