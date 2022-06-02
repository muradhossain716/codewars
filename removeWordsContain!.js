function remove (string) {
    let st=string.split(' ');
    let str=[];
    let ans='';
    string.split(' ').map((x,i)=>{
      //   console.log(x)
      if([...x].filter(x=>x=='!').length==1){
          // console.log([...x].filter(x=>x=='!').length)
        str.push(i)
      }
      
    })
    console.log(str)
    for(i=0;i<str.length;i++){
        if(i!=str[i]){
            console.log('string='+string,' i='+string[i])
            ans+=st[i];console.log(ans)
        }
    }
    return ans;
  }
  console.log(remove ("Hi! Hi!! Hi!"))