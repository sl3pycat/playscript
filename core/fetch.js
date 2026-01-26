//internal fetch handler used by prebuilt apis
psjs.fetch = function Fetch(url,type="text"){
  
  return new Promise((resolve,reject)=>{
    //creates an absolute path
    const cleanurl = new URL(url,location.href).href
    //fetches the file
    fetch(cleanurl)
    //returns the file in the desired format
    .then(response=>response[type]())
    //resolve the data
    .then(resolve)
    //rrestarts if the was no network, usefull for throttling networks :)
    .catch(network_error=>Fetch(url,type).then(resolve))
  })
  
}