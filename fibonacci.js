// Iterative 
// function fibonacci(n) {
//   let fibArr = [0,1]; 
//   let index = 0; 

//   for (let i = 0; i < n - 2; i ++) {
//     let secondToLast = fibArr[fibArr.length - 2]; 
//     let last = fibArr[fibArr.length - 1]; 
//     fibArr.push(last + secondToLast);
//     index += 1; 
//   }

//   return fibArr;
// }

// Recursion
function fibonacci(n) {
  let fibArr = [0,1]; 

  if (n <= 2) {
    return 1; 
  };

  while (n > 2) {
    fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]); 
    n -= 1; 
  }; 

  fibonacci(n); 
  return fibArr;
}


console.log(fibonacci(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]