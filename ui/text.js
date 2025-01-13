PSElement.prototype.text = function( insertText, position ){
  if( insertText === undefined)return this.raw.innerText
  else if( position === undefined ) this.raw.innerText = insertText
  else {
    if(position == "outer") this.raw.outerText = insertText
    else this.raw.insertAdjacentText( position, insertText )
  }
  
  return this
}