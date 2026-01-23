psjs.define("set",(target, value, extension, item)=>{
  
  //set target text
  if(extension && extension.endsWith("text")){
    if(extension == "text" || extension == "innertext")target.innerText = value
    if(extension == "outertext")target.outerText = value
  }
  
  
  //set target html
  if(extension && extension.endsWith("html")){
    if(extension == "html" || extension == "innerhtml")target.innerHTML = value
    if(extension == "outerhtml")target.outerHTML = value
  }
  
  
  //set target parent
  if(extension == "parent" && document.querySelector(value))document.querySelector(value).appendChild(target)
  
  
  //empty target set target children
  if(extension === undefined){
    target.innerText = ""
    psjs.parse(value,target)
  }
  
})