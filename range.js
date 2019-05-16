// Get integers from range x to y 
// iteration 
// function range(x, y) {
//   let rangeArr = []; 

//   for (let i = x + 1; i < y; i ++) {
//     rangeArr.push(i); 
//   }

//   return rangeArr; 
// }

// Recursion 
function range(x, y) {
  let rangeArr = []; 

  if (x === y) {
    return rangeArr; 
  }

  x += 1;
  
  while (x !== y) {
    rangeArr.push(x);
    x += 1;
  };

  range(x, y);
  return rangeArr; 
}

console.log(range(2, 9));
// [3, 4, 5, 6, 7, 8]