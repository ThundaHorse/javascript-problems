function makeWordObj(word) {
  let counterObj = {}; 

  for (let i = 0; i < word.length; i++) {
    if (counterObj[word[i]]) {
      counterObj[word[i]] += 1; 
    } else {
      counterObj[word[i]] = 1; 
    }
  }

  return counterObj;
}

function permutationChecker(baseWord, possibleWord) {
  let baseWordObj = makeWordObj(baseWord); 
  let possibleWordObj = makeWordObj(possibleWord); 

  for (let key in possibleWordObj) {
    if (baseWordObj.hasOwnProperty(key) && baseWordObj[key] >= possibleWordObj[key]) {
      return true; 
    }
  }

  return false; 
}


console.log(permutationChecker('abraham', 'abra'));
