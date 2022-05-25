function consecutive(arr, a, b) {
    return arr[arr.indexOf(a)+1]===b||arr[arr.indexOf(a)-1]===b
  }
  console.log(consecutive([1,2,3,5,6], 3, 5))