const script = async function( scriptPath = "", options = {}){
  const executeCode = async function( code ){
    try{
      return await Function(`return async function(){\n${ code }\n}`)()()
    } catch( error ){
      console.warn( error.message )
      return null
    }
  }
  const requestCode = async function( path ){
    try{
      let result = await fetch( path, options.headers || {})
      if(result.ok) return await result.text()
      else {
        console.warn( result )
        return null
      }
    } catch( error ){
      return await requestCode( path )
    }
  }
  
  if( options.type === "exec" ) return await executeCode( scriptPath )
  
  const preProcessedPath = ( options.prepend || "" ) + scriptPath + ( options.append || "" )
  const fullPath = new URL( preProcessedPath, options.baseScript || location.href )
  
  
  if( options.type === "raw" ) return await requestCode( fullPath )
  else return await executeCode( await requestCode( fullPath ) )
  
  
  
  
  
}


const scripts = async function( scripts, options){
  return await Promise.all( scripts.map( singleScript => script( singleScript, options )))
}