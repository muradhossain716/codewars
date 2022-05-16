const sequenceSum = (begin, end, step) => {
    let sum=0;
    for(i=begin;i<=end;i=i+step) sum+=i;
    return sum;
  };
  console.log(sequenceSum(2,3,1))