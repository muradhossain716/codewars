function stringClean(s){
    let b=['1','2','3','4','5','6','7','8','9','0']
   return [...s].filter(x=>!b.includes(x)).join('')
  }