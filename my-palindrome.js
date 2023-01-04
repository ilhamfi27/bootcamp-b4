function palindrome(values) {
    let arr = [[], []];
    let arrValues = ('' + values).split('');
    for (let i = 0; i < arrValues.length; i++) {
      const a = arrValues[i];
      arr[0].push(a);
    }
    arrValues = arrValues.reverse();
    for (let i = 0; i < arrValues.length; i++) {
      const a = arrValues[i];
      arr[1].push(a);
    }
    for (let i = 0; i < arr[0].length; i++) {
      if (arr[0][i] !== arr[1][i]) {
        return false;
      }
    }
    return true
  }
  console.log(palindrome(1234321));
  console.log(palindrome(1234322));
  