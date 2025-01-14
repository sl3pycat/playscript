console.time("PSJS v0.2")

const playscript = {
  baseScript: document.currentScript,
  manifest: (attributeName) => playscript.baseScript.getAttribute( attributeName ),
  injectScript: ( scriptPath ) => {
    scriptElement = document.createElement("script")
    scriptElement.async = false
    scriptElement.src = scriptPath
    document.head.appendChild( scriptElement )
  },
  version: 0.1,
}



/*INJECT CORE SCRIPTS*/
let coreScripts = ["splash-screen", "enhancements", "script", "element", "ui", "theme"]
coreScripts.forEach( scriptName => {
    let fullPath = new URL( `core/${scriptName}.js`, playscript.baseScript.src)
    playscript.injectScript( fullPath.href )
  })



/*WHEN APP IS READY*/
window.onload = async function AppReady(){
  
  const dynamicExtension = location.hostname == "localhost"? ".js": ".min.js"
  
  ui.body = ui( document.body )
  ui.head = ui( document.head )
  ui.root = ui( document.documentElement )
  
  const coreImports = ["subcore/icon", "ui/add", "ui/html", "ui/text", "ui/style", "ui/attr", "ui/on","ui/misc"]
  
  playscript.updateSplashScreenProgressBar(80)
  
  await scripts( coreImports , {
    baseScript: playscript.baseScript.src,
    append: dynamicExtension
  })
  
  playscript.updateSplashScreenProgressBar(90)
  ui.theme({
    accent: playscript.manifest("accent") || "#e91e63",
    preset: playscript.manifest("theme") || "light"
  })
  
  await script( playscript.baseScript.text, {
    type: "exec"
  })
  
  playscript.updateSplashScreenProgressBar(100)
  console.timeEnd("PSJS v0.2")
  document.querySelector("splash-screen").remove()
}