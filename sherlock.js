// Valid if all chars appear same # of times 
// Also valid if you can remove 1 char at 1 idx 
function wordObj(str) {
  let counterObj = {}; 

  for (let i = 0; i < str.length; i ++) {
    let char = str[i]; 

    if (counterObj[char]) {
      counterObj[char] += 1; 
    } else {
      counterObj[char] = 1; 
    }
  }
  return counterObj;
}

function isValid(str) {
  let strCount = Object.values(wordObj(str));
  let tallyCount = 0; 
  
  let current = strCount[0]; 
  
  for (let i = 0; i < strCount.length - 1; i ++) {
    let num = strCount[i]; 
    
    if (current == strCount[i+1]) {
      continue; 
    } else if (current != strCount[i+1] && (strCount[i + 1] - current == 1)) {
      tallyCount += 1 
      continue; 
    } else {
      tallyCount += 1; 
      return 'NO';
    }
  }

  if (tallyCount <= 1) {
    return 'YES'; 
  } 
};


console.log(isValid('aabbcdd'));
// NO 

console.log(isValid('aabbcccdd'));
// YES

console.log(isValid('aabbccccdd'));
// NO

console.log(isValid('abbcd'));
// YES

console.log(isValid('abdc'));
// YES