function possibilityArray(arr1, arr2) {
  let newArr = []; 

  for (let i = 0; i < arr1.length; i ++) {
    let num1 = arr1[i]; 

    for (let j = 0; j < arr2.length; j ++) {
      let num2 = arr2[j]; 

      newArr.push(num1 + num2); 
    }
  }

  return newArr;
}

array_1 = [1, 5, 10]; 
array_2 = [100, 500, 1000]; 

console.log(possibilityArray(array_1, array_2)); 