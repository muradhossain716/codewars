function sumOfDifferences(arr) {let sum=0
    let newArr=arr.sort((a,b)=>b-a)
    for(let i=0;i<newArr.length-1;i++){
      sum=sum+newArr[i]-newArr[i+1]
    }
    return sum
  }