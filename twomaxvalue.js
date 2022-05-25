function twoOldestAges(ages){
    // let arr=[];
    // let max=()=>Math.max(...ages)
    // arr.push(max())
    // ages.splice(ages.indexOf(max()),1)
    // arr.push(max())
    // return arr.sort((a,b)=>a-b)
    return ages.sort((a,b)=>a-b).slice(-2)
    
  
  }
   console.log(twoOldestAges([1,5,87,45,8,8]))