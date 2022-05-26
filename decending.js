function descendingOrder(n){
    return parseInt([...String(n)].sort((a,b)=>a-b).reverse().join(''))
  }
  console.log(descendingOrder(294021))