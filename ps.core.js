const ps = {
  version:0.1
}

document.head.insertAdjacentHTML("afterbegin",`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${document.currentScript.getAttribute("title")||document.title||"PlayScript app"}</title>
`)

ps.themes = {
  light:{
    background:"#ffffff",
    text:"#232323",
    shadow:"#00000020"
  },
  dark:{
    background:"#000000",
    text:"#cacaca",
    shadow:"#ffffff20"
  }
}

ps.theme = function(theme="light",accent="#e91e63"){
  
  let target = document.documentElement
  
  target.style.setProperty("--accent",accent)
  target.style.setProperty("--background",ps.themes[theme].background)
  target.style.setProperty("--text",ps.themes[theme].text)
  target.style.setProperty("--shadow",ps.themes[theme].shadow)}




ps.theme(document.currentScript.getAttribute("theme")||"light",document.currentScript.getAttribute("accent")||"#e91e63")