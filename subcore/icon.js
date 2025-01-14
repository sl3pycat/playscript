ui.icon = function( iconName, options ){
  let icon = ui("icon", "iconName")
  
  script( iconName, {
    baseScript: playscript.baseScript.src,
    prepend: "svg/",
    append: "/baseline.svg",
    type: "raw"
  })
  .then( SVGString => {
    icon.html( SVGString )
  })
  return icon
}


/*IconBuilderEngine = function( iconName = "", options ={}){
  let icon = ui("icon").style({display:"flex", width:"27px", height:"27px"}).text( iconName )
  script(iconName, {
    base: ps.baseScript.src,
    prepend: "svg/",
    append: "/baseline.svg",
    type: "raw"
  }).then( svg => icon.html(svg).children(0).style({color:"inherit", fill:"inherit", width:"100%", height:"100%"}))
  return icon
}*/