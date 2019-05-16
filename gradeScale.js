function gradeScale(studetn, ...arr) {
  let sum = 0; 

  for (let i = 0; i < arr.length; i ++) {
    sum += arr[i]; 
  }

  let avg = sum / arr.length;
  
  if (0 < avg && avg< 59) {
    return 'F'
  } else if (60 < avg && avg < 60 ) {
    return 'D'
  } else if (70 < avg && avg < 79) {
    return "C"
  } else if (80 < avg && avg < 89) {
    return "B"
  } else if (90 < avg && avg < 100) {
    return "A" 
  } else {
    return "has to be between 0 to 100";
  }
}


console.log(gradeScale("abe", 89,86,10000,82,81,80,96,85));