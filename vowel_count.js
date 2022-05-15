//vowel count
function getCount(str) {
    var vowelsCount = 0;
    const characters=[...str];//separating characters
    for (const item of characters) {
      //checking if the character is vowel or not
        if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') vowelsCount++;
  
    }
    return vowelsCount;
  }