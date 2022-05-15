//double each other
function doubleEveryOther(a) {
    let doubles = a;
    a.map(function (val, i, arr) {
      if (i % 2 !== 0) doubles[i] = val * 2;
    });
    return doubles;
  }
  console.log(doubleEveryOther([1, 2, 3, 4]))