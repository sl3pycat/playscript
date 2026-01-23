window.onload = ()=>{
  
  //parse initial app data
  psjs.parse(psjs.manifest.body||[], document.body)
  
  //bench how fast the framework inits
  console.timeEnd("PlayScript "+psjs.version)
}