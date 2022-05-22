function toCamelCase(str){
  if(str.length>0) {
    let st=str.split('_')
    
    if(st.length<=1){st=str.split('-')}
    for(i=1;i<st.length;i++){
      st[i]=st[i][0].toUpperCase()+st[i].slice(1)
      
    }
   return st.join('')
   
  }
  return ''
  
}
    console.log(toCamelCase('the_stealth_warrior'))