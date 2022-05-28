function order(words){
    let arr=[]
   let w=words.split(' ')
   for(let x=1;x<=w.length;x++){
    arr[x-1]=w.find((el)=>el.includes(`${x}`))
   }
    return arr.join(' ')
  }