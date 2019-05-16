function awesomeSauce(arr) {
  let awesomeArr = []; 

  for (let i = 0; i < arr.length - 1; i ++) {
    awesomeArr.push(arr[i]); 
    awesomeArr.push('awesomesauce');
  }

  awesomeArr.push(arr[arr.length -1]);
  return awesomeArr;
}

let arr = ['a', 'b', 'c', 'd', 'e']; 

console.log(awesomeSauce(arr));
