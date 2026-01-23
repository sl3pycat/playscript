//lib entry point
window.psjs = {
  version: 0.01,
  manifest:JSON.parse(document.currentScript.innerText||"[]"),
  primary_definitions:{},
  secondary_definitions:{},
  define(name,value,type="secondary"){psjs[type+"_definitions"][name]=value}
}

//bench how fast the framework inits
console.time("PlayScript "+psjs.version)

//kitchen imports are used for inhouse testing.
if(psjs.manifest.kitchen)psjs.manifest.kitchen.forEach(entry=>{
  let script = document.createElement("script")
  script.src = `/${entry}.js`
  script.async = false
  document.head.appendChild(script)
})