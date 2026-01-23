psjs.define("run",(target, value, extension, item)=>{
  if(item.params){
    //execute as function with the passed arguments
    Function(`${value}(${item.params.map(entry=>JSON.stringify(entry)).join(",")})`)()
  } else {
    //execute as raw code
    Function(value)()
  }
  //empty items to avoid further parsing
  Object.keys(item).forEach(entry=>{delete item[entry]})
},"primary")