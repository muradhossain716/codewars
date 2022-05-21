function noBoringZeros(n) {
    let num=1;
   if(n<0) num=-1;
   n=Math.abs(n);
    const arr=[...String(n)].map(Number);
    
    while(arr[arr.length-1]===0){
      arr.pop()
    }
    console.log(arr)
    let number=Number(arr.join(''))
    return number*num
  }
  

  console.log(noBoringZeros(-123000))