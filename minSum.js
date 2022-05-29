function minSum(arr) {
    let sum=0;
    let l=arr.length;
    let newArr=arr.sort((a,b)=>a-b)
    for(i=0;i<l/2;i++){
      sum+=newArr[i]*newArr[l-i-1]
    }
    return sum
  }