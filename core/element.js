const PSElement = function( element = "unknown", children = [], classList = "" ){
  
  if(typeof element === "string") this.raw = document.createElement( element )
  else this.raw = element
  
  this.raw.append(...children.map( child => {
    if(typeof child == "string") return child
    else return child.raw || child
  }))
  
  classList = classList.split(" ").filter(e => e )
  if( classList.length )this.raw.classList.add(...classList)
  
  return this
}


playscript.updateSplashScreenProgressBar(40)