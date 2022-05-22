function squareOrSquareRoot(array) {
    return array.map(
     (x)=> isInteger(Math.sqrt(x)) ? Math.sqrt(x):x*x)
  
  }