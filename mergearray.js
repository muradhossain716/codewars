function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1,...arr2].sort((a,b)=>a-b))]
  }
  console.log(mergeArrays([1,2,6], [1,4,5]))