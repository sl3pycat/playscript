app.parse = function Parse(json, target){
  
  
  
  //handles Multiple entries to be parsed
  if(Array.isArray(json))return json.forEach(entry=>Parse(entry,target))
  
  
  
  //handles single entries (main code)
  if(typeof json === "object" && json !== null){
    
    //handle definitions
    //TODO: Optimise code please
    Object.keys(app.definitions)
    .forEach(entry => {
      const jsonKeys = Object.keys(json)
      
      //cluster definitions
      if(entry.endsWith("."))return jsonKeys.filter(name=>name.includes(".")&&name.startsWith(entry)).map(name=>{
        app.definitions[entry](name.split(".")[1], json[name], target)
      })
      
      //regular definitions
      if(jsonKeys.includes(entry))return app.definitions[entry](json[entry], target)
      
      
    })
    
  }
  
  
  
  //TODO: handle other data types.
  
}