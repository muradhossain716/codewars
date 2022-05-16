function sumDigits(n) {
    let sum=0;
    let length=`${n}`.length;
    n=n<0? n*(-1):n;
    for(let i=0;i<length;i++){
     sum=sum+(n%10);
     n=Math.floor(n/10)
     //ans fraction part soho ase
    }
     return sum;
  }
  console.log(sumDigits(-35))
  
//another solution
//   function sumDigits(number) {
//     return Math.abs(number).toString().split("").reduce((sum,x)=>sum+= +x,0)
//   }