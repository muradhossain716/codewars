
function solution(n){
    let max=0;
      for(i=0;i<n.length;i++){
        let num=n.substring(i,i+5);
        max=Math.max(Number(num),Number(max))
      }
    return max
    }
  console.log(solution('1242445'))

  //another solution using str
  function solution(digits){
    let answer = 0;
    
    for (let i=0; i<digits.length; i++){
      let number = digits.substr(i, 5);
      console.log(number)
       //each loop iteration pulls the next 5 digits into a substring
      if(Number(number) > answer){       //convert to number and compare against answer
        answer = Number(number);
      }
    }
    return answer;
}
console.log(solution('3363078303973'))