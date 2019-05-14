function factorial(n) {
  let sum = 1; 

  while (n >= 1) {
    sum *= n; 
    n -= 1; 
  }

  return sum;
}


console.log(factorial(5)); 
// 120 