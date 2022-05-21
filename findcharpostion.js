function position(letter){
    let l=letter.toLowerCase();
  const char='abcdefghijklmnopqrstuvwxyz';
    for(i=0;i<char.length;i++){
      if(l===char[i])return `Position of alphabet: ${i+1}`
    }
  }