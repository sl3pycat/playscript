psjs.parse = function Parse(json, target){
  
  
  
  //handles Multiple entries to be parsed
  if(Array.isArray(json))return json.forEach(entry=>Parse(entry,target))
  
  
  
  //handles single entries @core/parse.item-handler.js
  if(typeof json === "object" && json !== null)return psjs.parseItem(json, target)
  
  
  
  //all other data types are just overwritten
  target.innerText = String(json)
}