function recursiveFactorial(n) {
  let sum = 1; 

  if (n === 1) {
    return 1; 
  }

  while (n > 1) {
    sum *= n; 
    n -= 1;
  }

  return sum;
  recursiveFactorial(n);
}

console.log(recursiveFactorial(5)); 
// 120 