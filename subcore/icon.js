ui.icon = function( iconName, options ){
  let icon = ui("icon", "iconName")
  .style({display:"flex", width:"27px", height:"27px"})
  
  script( iconName, {
    baseScript: playscript.baseScript.src,
    prepend: "svg/",
    append: "/baseline.svg",
    type: "raw"
  })
  .then( SVGString => {
    icon.html( SVGString ).children(0).style({color:"inherit", fill:"inherit", width:"100%", height:"100%"})
  })
  return icon
}


