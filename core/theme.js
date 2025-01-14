ui.theme = function(themeBuilder = {}){
  
  
  if( themeBuilder.accent )ui.root.style("--accent", themeBuilder.accent)//sets the app accent, used by controls like buttons and inputs
  
  if( themeBuilder.preset )builder = playscript.themePresets[themeBuilder.preset]//use predefined themes
  
  const keyPairs = Object.entries(builder)
  const keyPairsHandler = pair => {
    let [ key, value] = pair
    ui.root.style( "--" + key, value )
  }
  keyPairs.forEach( keyPairsHandler )
  
}


playscript.themePresets = {
  light:{
    foreground:"#fafafa",
    background:"white",
    color:"#454545",
    header:"#000000",
    shadow:"#00000050"
  },
  dark:{
    foreground:"#202020",
    background:"#121212",
    color:"#fafafa",
    header:"#ffffff",
    shadow:"#000000aa"
  },
  oled:{
    foreground:"#101010",
    background:"#000000",
    color:"#fafafa",
    header:"#ffffff",
    shadow:"#ffffff50"
  },
}

playscript.updateSplashScreenProgressBar(60)