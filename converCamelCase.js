function toCamelCase(str){
  if(str.length>0) {
    let st=str.split('_')
    console.log(st.length)
    
  if(st.length<2){st=str.split('-')
    }
    for(i=1;i<st.length;i++){
      st[i]=st[i][0].toUpperCase()+st[i].slice(1)
      
    }
   return st.join('')
   
  }
  return ''
  
}   console.log(toCamelCase('the_stealth_warrior'))