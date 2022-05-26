function solution(n){
    return parseInt([...String(n)].sort().join('').slice(-5).split('').sort((a,b)=>b-a).join(''))
  }
