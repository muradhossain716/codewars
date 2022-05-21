function noBoringZeros(n) {
   
    const arr=[...String(n)].map(Number);
    const l=arr.length;
    while(arr[l-1]===0){
      arr.pop()
    }
    return Number(arr.join(''))
  }