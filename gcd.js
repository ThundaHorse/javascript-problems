// Find greatest common divisor of two numbers 
// Iterative 
// function gcd(n1, n2) {
//   let max = undefined 
//   let greater; 

//   if (n1 > n2) {
//     greater = n1; 
//   } else {
//     greater = n2; 
//   }

//   for (let i = 0; i <= greater; i ++) {
//     if (n1 % i === 0 && n2 % i === 0) {
//       if (max === undefined || i > max) {
//         max = i; 
//       }
//     }
//   }

//   return max;
// }

// Recursion 
function gcd(n1, n2) {
  let max = undefined; 
  let greater; 
  let lesser; 

  if (n1 > n2) {
    greater = n1; 
    lesser = n2; 
  } else {
    greater = n2; 
    lesser = n1; 
  }

  if (lesser === greater - 1) {
    return ;
  }

  while (lesser != greater) {
    if (greater % lesser === 0) {
      if (max === undefined || lesser > max) {
        max = lesser; 
      }
    }
    lesser += 1; 
  }

  return max; 
  gcd(lesser + 1, greater);
}

console.log(gcd(3,30)); 
// 10 
