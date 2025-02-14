PSElement.prototype.attr = function( property, value ){
  
  const getAttributeValue = value === undefined
  const deleteAttribute = value === null
  const propertyArgumentIsObject = typeof property == "object"
  const setAttributeFromKeyPair = pair => {
      let [ AttributeName, value ] = pair
      this.attr( AttributeName, value)
  }
  
  if( propertyArgumentIsObject ) {
    let keyPairs = Object.entries( property )
    keyPairs.forEach( setAttributeFromKeyPair )
  }
  
  if( getAttributeValue ) return this.raw.getAttribute( property )
  else if( deleteAttribute ) this.raw.removeAttribute( property )
  
  else {
    this.raw.setAttribute( property, value)
  }
  
  
  return this
}