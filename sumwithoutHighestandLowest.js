function sumArray(array) {
    if(array==null||array.length==0)return 0;
    let aa=array.sort((a,b)=>a-b);
   
    return array.sort((a,b)=>a-b).slice(1,-1).reduce((acc,x)=>acc+x,0)
    
  }
  console.log(sumArray([ -6, 20, -1, 10, -12 ]))