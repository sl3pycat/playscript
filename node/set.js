psjs.define("set",(target, value, extension, item)=>{
  
  //set target text
  if(extension == "text" || extension == "innertext")target.innerText = value
  
  //set target parent
  if(extension == "parent" && document.querySelector(value))document.querySelector(value).appendChild(target)
  
  //set target children
  if(extension === undefined)psjs.parse(value,target)
  
})