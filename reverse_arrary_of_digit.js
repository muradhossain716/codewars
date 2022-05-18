reverse_array_of_digit.js

// function digitize(n) {
//     let arr=[];
//     let length=`${n}`.length;
//     for(i=0;i<length;i++){
//         arr.push(n%10)
//         n=Math.trunc(n/10)
//     }
//     return arr
//   }
//   digitize([348597])

function digitize(n){
    console.log(n.split('').map(Number))
}
digitize('348597')