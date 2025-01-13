PSElement.prototype.on = function( eventName, eventCode, options ){
  
  const eventHandler = eventData => {
    eventCode.bind( this )( eventData )
  }
  
  this.raw.addEventListener( eventName, eventHandler , options )
  
  return this
}