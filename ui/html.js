PSElement.prototype.html = function( insertHtml, position = "beforeend"){
  if( insertHtml === undefined)return this.raw.innerHTML
  else if( position === undefined ) this.raw.innerHTML = insertHTML
  else {
    if(position == "outer") this.raw.outerHTML = insertHtml
    else this.raw.insertAdjacentHTML( position, insertHtml )
  }
  
  return this
}