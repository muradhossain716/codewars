function vowelIndices(word){
    //your code here
    let w=[...word.toLowerCase()]
    let v='aeiouy';
    let arr=[];
    for(i=0;i<w.length;i++){
        if(v.includes(w[i])){
            arr.push(i+1)
        }
    }
    return arr
  }