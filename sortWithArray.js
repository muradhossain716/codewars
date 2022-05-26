
function sort(initialArray, sortingArray) {
    const arr = [];

    for (let i = 0; i < sortingArray.length; i++) {
        arr[sortingArray[i]] = initialArray[i];     
    }

    return arr;
}
console.log(sort(['z', 'x', 'y'], [ 1, 2, 0]))