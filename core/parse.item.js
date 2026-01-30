psjs.parse_item = (psjs_item, target)=>{
  
  Object.keys(psjs_item).forEach(entry=>{
    if(entry.startsWith("create.")){
      target = document.createElement(entry.split(".")[1])
      psjs.parse(psjs_item[entry],target)
    }
    
    if(entry.startsWith("add.")){
      const temporary_element = document.createElement(entry.split(".")[1])
      target.appendChild(temporary_element)
      target = temporary_element
      psjs.parse(psjs_item[entry],target)
      
    }
  })
  
  
  //moves element to a new target
  if(psjs_item.target){
    const new_target = document.querySelector(psjs_item.target)
    //if its a newly created element
    if(psjs_item.add){
      //if a target exists
      if(new_target)new_parent.appendChild(target)
    } else {
      //if its not a new element then its a ref to an existing target, empties the psjs_item if no target is found to avoid failing at definitions
      if(new_target)target = new_target
      else psjs_item = {}
    }
    
  }
  
  //delete supers from definition
  delete psjs_item.add
  delete psjs_item.create
  delete psjs_item.target
  
  
  //execute primary functions
  for(const key in psjs_item){
    const [name, extension] = key.split(".")
    if(psjs.primary_definitions[name])psjs.primary_definitions[name](target, psjs_item[key], extension, psjs_item)
  }
  
  
  //execute secondary functions
  for(const key in psjs_item){
    const [name, extension] = key.split(".")
    if(psjs.secondary_definitions[name])psjs.secondary_definitions[name](target, psjs_item[key], extension, psjs_item)
  }
  
  //handle regular html attributes
  for(const key in psjs_item){
    const [name, extension] = key.split(".")
    if(!(psjs.primary_definitions[name]||psjs.secondary_definitions[name]))target.setAttribute(key, psjs_item[key])
  }
}