function getDivisorsCnt(n){
let count=1;
// for(i=1;i<=n;i++){
for(i=1;i<=n/2;i++){
    if(n%i===0) count++;
    //we can't divide any num greater than half of the number 
    // we can't divide 10 with 6
}
return count;
}
console.log(getDivisorsCnt(30));