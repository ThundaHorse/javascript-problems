function combineArr(arr) {
  let str = ''; 
  for (let i in arr) {
    str += arr[i];
  }
  return str;
}

let array = ['a', 'b', 'e'];
console.log(combineArr(array));