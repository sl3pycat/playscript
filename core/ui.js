const ui = new Proxy( function UIBuilder(element = "", children = [], classList = ""){
  
  const childrenArgumentIsArray = typeof children == "object" && children !== null && children instanceof Array
  
  if( childrenArgumentIsArray ) return new PSElement(element, children, classList)
  else return new PSElement(element, [children], classList)
},{
  get(target, elementName, reciever){
    if( elementName in target ) return target[elementName]
    
    return function (...passableArguments){
      return ui( elementName, ...passableArguments)
    }
  },
  
  set(target, property, value){
    
    target[property] = value
    return true
  }
})


playscript.updateSplashScreenProgressBar(50)