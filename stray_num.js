//find the stray number//unique number
function stray(n) {
    for(let i=0;i<n.length;i++){
        let c=0;
      for(let j=0;j<n.length;j++){
          if(n[i]==n[j]){c++}
      }
      if(c<2)return n[i]
    }
  }