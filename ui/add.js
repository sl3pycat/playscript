PSElement.prototype.add = function( children, position = "beforeend"){
  const addToBody = children === undefined
  const isArray = typeof children == "object" && children !== null && children instanceof Array
  
  if( addToBody ){
    ui.body.raw.append( this.raw )
    return this
  }
  if( !isArray ) children = [ children ]
  
  //let reversedList = children.reverse()
  if( position.startsWith("after"))children = children.reverse()
  
  children.forEach( child => {
    if( typeof child !== "object" || child === null ) this.raw.insertAdjacentText( position, new String(child) )
    else this.raw.insertAdjacentElement( position, child.raw || child )
  })
  
  return this
}