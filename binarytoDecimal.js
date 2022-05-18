const binaryArrayToNumber = arr => {
    // let sum=0;
    // let posValue=0;
    // for(i=arr.length-1;i>=0;i--){
    //     if(arr[i]===1) sum+=Math.pow(2,posValue)
    //     posValue++;
    // }
// return sum
   return parseInt(arr.join(''),2) 
  };
  console.log(binaryArrayToNumber([0,0,1,1]))