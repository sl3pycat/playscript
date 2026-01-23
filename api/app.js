psjs.define("app",(target, value, extension, item)=>{
  
  //default system alert
  if(extension == "alert")alert(value)
  
  //system console
  if(["log","warn","error"].includes(extension))console[extension](value)
  
})