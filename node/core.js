//creates nodes and adds their initial data as children.
psjs.definitions["add."]=(nodename, value, target)=>{
  const temp = document.createElement(nodename)
  psjs.parse(value, temp)
  target.appendChild(temp)
  return temp
}

//handle node events by setting them inline for "cacheability", overwrites old events when redefined.
psjs.definitions["on."]=(event, value, target)=>{
  target.setAttribute("on"+event, `psjs.parse(${JSON.stringify(value)},this)`)
} 