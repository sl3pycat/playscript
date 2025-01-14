{
  
  const title = playscript.manifest("title") || document.title || "PlayScript App"
  const headData = `<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${ title }</title><script as="global styling">
  
  html {
    background-color:var(--background);
    color:var(--color);
    fill:var(--color);
  }

  *:not(html){
    color:inherit;
    fill:inherit;
  }

  button{
    color:white;
    fill:white;
    background-color:var(--accent);
    border-color:var(--accent);
  }
  
  </style>`
  
  document.head.insertAdjacentHTML("afterbegin", headData )
  playscript.updateSplashScreenProgressBar(10)
}

const coreStyling = document.createElement("style")
coreStyling.innerText = `
html {
  background-color:var(--background);
  color:var(--color);
  fill:var(--accent);
  margin:0;
  padding:0;
  border:none;
}

*:not(html){
  color:inherit;
  fill:inherit;
  user-select:none;
}

button{
  color:white;
  background-color:var(--accent);
  border:2px solid var(--accent);
}
`
document.head.append(coreStyling)

