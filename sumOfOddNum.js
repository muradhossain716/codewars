function rowSumOddNumbers(n) {
    let sum=0;
    let l=1;
      for(let i=1;i<=n;i++){
      for(let k=1;k<=i;k++,l+=2){
        if(i==n) sum+=l;
       
      }
    }
    return sum
  }