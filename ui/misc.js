PSElement.prototype.children = function(pos){
  let children = [...(this.raw.children||[])].map( entry => ui(entry)) 
  if(typeof pos == "number")return children[pos]
  if(pos == "last")return children.pop()
  if(pos == "first")return children.shift()
  return children }

PSElement.prototype.connected = function(){return this.raw.isConnected}

PSElement.prototype.parent = function(){return ui(this.raw.parentElement)}

PSElement.prototype.sibling = function(position = "previous"){
  return position=="previous"?ui(this.raw.prevousSibling):ui(this.raw.nextSibling)
}