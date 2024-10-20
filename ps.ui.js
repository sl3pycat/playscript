ps.style = function(selector="*", style={}){
  let element = document.createElement("style")
  Object.entries(style).forEach(entry=>element.style[entry[0]]=entry[1])
  element.innerText = `${selector}{${element.getAttribute("style")}}`
  element.removeAttribute("style")
  document.head.append(element)
}

ps.style("*",{
  color:"inherit",
  backgroundColor:"transparent",
  border:0,
  margin:0,
  padding:0
})