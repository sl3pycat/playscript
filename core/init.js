const app = {
  version: 0.01,
  manifest:JSON.parse(document.currentScript.innerText||"[]"),
  definitions:{
    alert:value=>alert(value),
    "console.":(extension, value, target)=>console[extension](value)
  },
}