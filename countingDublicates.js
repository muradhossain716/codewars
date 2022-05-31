function duplicateCount(text){
  let str='';
    let arr=[];
    let count=[];
    [...new Set(text)].map(x=>{
      let l=[...text.toLowerCase()].filter(a=>a==x).length;
      
      if(l>1){
        arr.push(x);
        count.push(l);
    }
    })
    console.log(arr);
    for(let i=0;i<arr.length;i++){
      str+=`${arr[i]} occurs ${count[i]} times and `
    }
    
    return [arr.length,str.slice(0,-4)]
    
  }
  console.log(duplicateCount('aabbcde'))