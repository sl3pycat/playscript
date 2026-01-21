psjs.define("on",(target, value, extension, item)=>{
  if(extension){
    target.setAttribute("on"+extension,`psjs.parse(${JSON.stringify(value)},this)`)
  }
})