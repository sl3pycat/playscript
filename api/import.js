psjs.define("import",(target, value, extension, item)=>{
  //TODO: move to /core/fetch.js and document (will be used by other apis)
  const recursive_fetch = function Recurse(url){
    return new Promise((resolve,reject)=>{
      fetch(url)
      .then(response=>response.text())
      .then(resolve)
      .catch(network_error=>Recurse(url).then(resolve))
    })
  }
  
  //currently just handles jsons
    recursive_fetch(value)
    .then(response=>{
      psjs.parse(JSON.parse(response),target)
    })
},"primary")