function findMissingLetter(array)
{ 
  const l=array.length;
  const str=array.join('')
  const start=str.charCodeAt(0);
  for(i=1;i<l;i++){
      if(str.charCodeAt(i)!==start+i)return String.fromCharCode(start+i)
  }
}
console.log(findMissingLetter(['a','b','d']))