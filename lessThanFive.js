function lessThanFive(arr) {
  let newArr = []; 

  for (let i = 0; i < arr.length; i ++) {
    let num = arr[i]; 
    if (num < 5) {
      newArr.push(num);
    }
  }

  return newArr;
}

array = [1, 5, 6, 7, 2, 3, 2];
console.log(lessThanFive(array));