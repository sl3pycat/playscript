ps.style("button",{
  color:"var(--accent)",
  position:"relative",
  fontWeight:"bold",
  padding:"10px",
  overflow:"hiddenr"
})

ps.style("button:before",{
  content:"''",
  position:"absolute",
  width:"100%",
  height:"100%",
  backgroundColor:"var(--accent)",
  opacity:0.34
})