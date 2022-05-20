function persistence(num) {
    let count=0;
    while(`${num}`.length>1){
     num= [...String(num)].map(Number).reduce((acc,current)=>
     acc*=current,1)
    console.log(num)
    count++;
    }
    return count;
   
 }
 console.log('Count: '+ persistence(999))