{
  
  const accent = playscript.manifest("accent") || "#e91e63"
  const backgroundColor = playscript.manifest("theme") == "light" || !playscript.manifest("theme")? "white": "#181818"
  const textColor = backgroundColor == "white"? "#454545": "#fafafa"
  const title = playscript.manifest("title") || document.title || ""
  const subtext = playscript.manifest("subtext") || ""
  
  
  let splashScreenElement = document.createElement("splash-screen")
  splashScreenElement.innerHTML = `
  <style>
    splash-screen{
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: fixed;
      background-color: ${ backgroundColor };
      display: flex;
      flex-direction: column;
    }
    
    
  </style>
  
  <progress-bar style="width:0%;height:3px;background-color:${ accent };"></progress-bar>
  
  <splash-text style="color:${ textColor };text-align:center;font-size:28px;padding:80px;margin-top:auto;font-family:sans-serif;">
    ${ title }
    </br>
    <splash-subtext style="color:${ accent };font-size:12px;font-family:inherit;">
      ${ subtext }
    </splash-subtext>
  </splash-text>
  `
  
  
  document.documentElement.append( splashScreenElement )
  playscript.updateSplashScreenProgressBar = function( percentage ){
    let progressBar = document.querySelector("splash-screen > progress-bar")
    if( progressBar) progressBar.style.width = percentage + "%"
  }
  playscript.updateSplashScreenProgressBar(10)
}