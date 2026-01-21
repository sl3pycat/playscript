//lib entry point
window.psjs = {
  version: 0.01,
  manifest:JSON.parse(document.currentScript.innerText||"[]"),
  primary_definitions:{},
  secondary_definitions:{},
  define(name,value,type="secondary"){psjs[type+"_definitions"][name]=value}
}