function find_average(array) {
    // your code here
    if(array.length){
      let num=array.reduce((n,x)=>n+x,0)
      return num/array.length;
    }
    return 0;
  }