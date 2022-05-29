
function XO(str) {
    let cntX=0;
    let cntY=0;
    [...str.toLowerCase()].map((n)=>{if(n=='x') cntX++;
                                    else if(n=='o') cntY++
                                    })
  console.log(cntX,' ',cntY);
    if(cntX==cntY)return true
    else{return false}
    }
    XO('xoxo')