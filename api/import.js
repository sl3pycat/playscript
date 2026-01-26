psjs.define("import",(target, value, extension, item)=>{
  //handles playsript json
  if(extension === undefined)psjs.fetch(value).then(response=>{
    try{psjs.parse(JSON.parse(response),target)}catch(json_parsing_error){/*TODO: handle ts*/}
  })
},"primary")