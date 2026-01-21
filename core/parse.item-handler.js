psjs.parseItem= function(psjsItem, target){
  //cache json keys and create a new element if its a creation block
  const jsonKeys = Object.keys(psjsItem).filter(entry => {
      if(entry.startsWith("add.")){
        target = psjs.definitions["add."](entry.split(".")[1], psjsItem[entry], target)
        return false
      }
      return true
  })
    
    
    //handle definitions
    //TODO: Optimise code please
    const defs = Object.keys(psjs.definitions)
    defs.forEach(entry => {
      
      //cluster definitions
      if(entry.endsWith("."))return jsonKeys.filter(name=>name.includes(".")&&name.startsWith(entry)).map(name=>{
        psjs.definitions[entry](name.split(".")[1], psjsItem[name], target)
      })
      
      //regular definitions
      if(jsonKeys.includes(entry))return psjs.definitions[entry](psjsItem[entry], target)
      
    })
    
    //post parsing definitions set regular attributes
    return jsonKeys.forEach(entry=>{
      if(!(defs.includes(entry) || entry.includes(".")))target.setAttribute(entry, psjsItem[entry])
    })
}