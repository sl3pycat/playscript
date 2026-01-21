//primary style definition used to create stylesheets
psjs.define("style",(target, value, extension, item)=>{
  //checks if is a secondary style
  if(typeof item.style != "string" || item.style.includes(":"))return
  //create style element
  const style = document.createElement("style")
  //create stylesheet
  style.innerText = `${value}{${Object.keys(item).map(entry=>entry!="style"?`${entry}:${item[entry]};`:"").join("")}}`
  //empty items to avoid further parsing
  Object.keys(item).forEach(entry=>{delete item[entry]})
  //append the style element to its parent
  target.appendChild(style)
  
}, "primary")



//secondary style definitions used for inline styling
psjs.define("style",(target, value, extension, item)=>{
  if(extension){
    //extension based styling
    target.style[extension] = value
  } else {
    //natural styling
    if(typeof value === "string")target.setAttribute("style",value)
    //object based styling
    if(typeof value === "object" && value !== null)Object.keys(value).forEach(entry=>target.style[entry]=value[entry])
  }
})
