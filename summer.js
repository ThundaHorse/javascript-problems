function summer(arr) {
  let sum = 0; 
  for (let i of arr) {
    sum += i;
  }

  return sum;
}

let array = [3, 9, 1, 7]; 
console.log(summer(array));
// 20