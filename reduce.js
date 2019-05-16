const reducer = (accumulator, currentValue) => accumulator + currentValue;
function reduceSum(arr) {
  return arr.reduce(reducer);
}

let numbers = [1, 2, 4, 2];
console.log(reduceSum(numbers))
