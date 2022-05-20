// function isPrime(num) {
//     //TODO
//   let s=Math.sqrt(num);
//   if(num>1){
//    if(num==2||num==3)return true
//     else{
//       for(let i=2;i<=s;i++){
//         if(num%i==0)return false;
//         }
//       return true
    
//   }
//  }
// }

function isPrime(num) {
    //TODO
  let s=Math.sqrt(num);
  console.log(s);
  if(num>1){
      for(let i=2;i<=s;i++){
        if(num%i==0)return false;
        }
      return true
    
  }
  return false
}
console.log(isPrime(2))