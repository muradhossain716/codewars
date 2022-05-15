function deleteDigit(n) {
    let str=n.toString();
     let number=0;
     for(let i=0;i<str.length;i++){
      let temp=str.slice(0,i)+str.slice(i+1);
       number=Math.max(temp,number);
     }
     return number;
   }