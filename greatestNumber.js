function greatestNumber(arr) {
  let max = undefined; 

  for (let i = 0; i < arr.length; i ++) {
    let num = arr[i]; 

    if (max == undefined || num > max) {
      max = num; 
    }
  }

  return max;
}


let array = [5, 4, 1, 8, 2, 7];

console.log(greatestNumber(array));
// 8