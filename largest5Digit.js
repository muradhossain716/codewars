
function solution(n){
    let max=0;
      for(i=0;i<n.length;i++){
        let num=n.substring(i,i+5);
        max=Math.max(Number(num),Number(max))
      }
    return max
    }
  console.log(solution('1242445'))