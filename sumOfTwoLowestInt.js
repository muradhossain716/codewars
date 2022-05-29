function sumTwoSmallestNumbers(n) {  
    return n.sort((a,b)=>b-a).slice(-2).reduce((acc,x)=>acc+x,0)
  }