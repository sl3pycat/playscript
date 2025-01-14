PSElement.prototype.style = function( property, value ){
  
  const getStyleText = property === undefined && value === undefined
  const getStylePropertyValue = value === undefined
  const deleteStyleProperty = value === null
  const propertyIsObject = typeof property == "object"
  const setStyleFromKeyPair = pair => {
      let [ styleName, value ] = pair
      this.style( styleName, value)
  }
  
  
  if( propertyIsObject ) {
    let keyPairs = Object.entries( property )
    keyPairs.forEach( setStyleFromKeyPair )
  }
  
  else if( getStyleText ) return this.raw.style.cssText
  
  else if( getStylePropertyValue ) return this.raw.style.getPropertyValue( property )
  
  else if( deleteStyleProperty ) this.raw.style.removeProperty( property )
  
  else {
    this.raw.style.setProperty( property, value)
  }
  return this
}