//creates nodes and adds their initial data as children.
app.definitions["add."]=(nodename, value, target)=>{
  const temp = document.createElement(nodename)
  app.parse(value, temp)
  target.appendChild(temp)
  return temp
}

//handle node events, overwrites old events when redefined.
app.definitions["on."]=(event, value, target)=>{
  target["on"+event]=eventData=>app.parse(value, target)
} 