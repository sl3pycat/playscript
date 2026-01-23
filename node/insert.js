psjs.define("insert",(target, value, extension, item)=>{
  
  //insert text into target
  if(extension && extension.startsWith("text")){
    if(extension == "text" || extension == "textend")target.insertAdjacentText("beforeend", value)
    if(extension == "textstart")target.insertAdjacentText("afterbegin", value)
    if(extension == "textbefore")target.insertAdjacentText("beforebegin", value)
    if(extension == "textafter")target.insertAdjacentText("afterend", value)
  }
  
  
  //insert html to target 
  if(extension && extension.startsWith("html")){
    if(extension == "html" || extension == "htmlend")target.insertAdjacentHTML("beforeend", value)
    if(extension == "htmlstart")target.insertAdjacentHTML("afterbegin", value)
    if(extension == "htmlbefore")target.insertAdjacentHTML("beforebegin", value)
    if(extension == "htmlafter")target.insertAdjacentHTML("afterend", value)
  }
  
  
  //add children to target
  if(extension === undefined)psjs.parse(value, target)
})