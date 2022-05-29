function sortArray(array) {
      let oddin=[];
      let oddnum=[];
    
      array.map((x,i)=>{
        if(x%2!==0){
          oddin.push(i);
          oddnum.push(x)
        }
      })
      oddnum.sort((a,b)=>a-b)
      for(let i=0;i<oddnum.length;i++){
          array[oddin[i]]=oddnum[i]
      }
      console.log(array)
    }