app.parse = function Parse(json, target){
  
  
  
  //handles Multiple entries to be parsed
  if(Array.isArray(json))return json.forEach(entry=>Parse(entry,target))
  
  
  
  //handles single entries (main code)
  if(typeof json === "object" && json !== null){
    
    //cache json keys
    const jsonKeys = Object.keys(json).filter(entry => {
      if(entry.startsWith("add.")){
        //create a new element
        target = app.definitions["add."](entry.split(".")[1], json[entry], target)
        return false
      }
      return true
    })
    
    //handle target resets
    
    //handle definitions
    //TODO: Optimise code please
    return Object.keys(app.definitions)
    .forEach(entry => {
      
      //cluster definitions
      if(entry.endsWith("."))return jsonKeys.filter(name=>name.includes(".")&&name.startsWith(entry)).map(name=>{
        app.definitions[entry](name.split(".")[1], json[name], target)
      })
      
      //regular definitions
      if(jsonKeys.includes(entry))return app.definitions[entry](json[entry], target)
      
      
    })
    
  }
  
  
  
  //all other data types are just overwritten
  target.innerText = String(json)
}