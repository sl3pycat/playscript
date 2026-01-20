app.definitions["sys."] = function(extension, value, target){
  
  //default system alert
  if(extension == "alert")return alert(value)
  
  //system console
  if(["log","warn","error"].includes(extension))console[extension](value)
  
}