function openOrSenior(data){
    let ans=[]
    data.map(x=>{
      x[0]>=55&&x[1]>7?ans.push('Senior'):ans.push('Open')
    })
    return ans
  }