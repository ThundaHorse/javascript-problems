// Sum of Arr integers 
function sum(arr) {
  let sum = 0; 
  for (let i in arr) {
    sum += arr[i];
  }

  return sum;
}



let array = [1, 2, 3, 4, 5, 6]; 
console.log(sum(array)); 