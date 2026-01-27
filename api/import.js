psjs.define("import",(target, value, extension, item)=>{
  
  psjs.fetch(value).then(response=>{
    
    //handles playsript json
    if(extension === undefined)try{psjs.parse(JSON.parse(response),target)}catch(json_parsing_error){/*TODO: handle ts*/}
    
    //handles html
    if(extension === "html")target.insertAdjacentHTML("beforeend", response)
    
    //handles css
    if(extension === "css")target.insertAdjacentHTML("beforeend", `<style>${response}</style>`)
    
    //handles js
    if(extension === "js")try{Function(response)()}catch(json_parsing_error){/*TODO: handle ts*/}
  })
},"primary")