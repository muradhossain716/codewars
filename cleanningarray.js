function stringClean(s){
    let b=['1','2','3','4','5','6','7','8','9','0']
   return [...s].filter(x=>!b.includes(x)).join('')
  }

  function isPangram(s){
    //...
    s=s.toLowerCase();
    [...'abcdefghijklmnopqrstuvwxyz'].map(function(x){if(!s.includes(x))return false })
    return true
  }