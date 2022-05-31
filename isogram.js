function isIsogram(str){
    return str.length===[...new Set([...(str.toLowerCase())])].length
  }
  //another solution
  function isIsogram(str){
    return str.length===new Set(str.toLowerCase()).size
  }