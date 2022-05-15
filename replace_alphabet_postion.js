//replace with alphbet positon
function alphabetPosition(text) {
    let positions='';
    for(i=0;i<text.length;i++){
      let lowerLetter=text[i].toLowerCase();
      if(lowerLetter>= 'a'&& lowerLetter <='z'){
      positions=positions +(lowerLetter.charCodeAt()-96)+' ';
      }
    }
    return positions.slice(0,-1);
  }