function cleanYard(yard) {
  let basket = []; 
  let eggCount = 0; 

  for (let i = 0; i < yard.length; i ++) {
    let arrays = yard[i]; 

    for (let j = 0; j < arrays.length; j ++) {
      let columns = arrays[j];

      if (columns == "E") {
        eggCount += 1; 
        basket.push([i, j]); 
        columns = "G";
      }
    }
  }
  console.clear();
  console.log("     Yard: Clean     "); 
  console.log("     Divots: Replaced     "); 
  console.log("");
  console.log(`     Total Eggs Found: ${eggCount}     `);
  console.log("");
  console.log("     Eggs found at:     ");
  console.log("--------------------------");
  for (let k = 0; k < basket.length; k ++) {
    console.log("        [" + basket[k] + "]     ");
  }
  console.log("");
  console.log("Yards clean");

  // return basket;
}


let  yard = [                                      
["G", "E", "G", "G", "G", "G", "G", "E", "G", "G", "G", "G", "G", "G", "E"],
["E", "G", "E", "G", "G", "G", "E", "G", "G", "G", "G", "G", "G", "G", "G"],
["G", "G", "G", "E", "G", "E", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
["G", "G", "G", "G", "E", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
["G", "G", "G", "E", "G", "E", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
["G", "G", "E", "G", "G", "G", "E", "G", "G", "G", "G", "G", "G", "G", "G"],
["G", "G", "G", "E", "G", "E", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
["G", "G", "G", "G", "E", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
["G", "G", "G", "E", "G", "E", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
["G", "G", "E", "G", "G", "G", "E", "G", "G", "G", "G", "G", "G", "G", "G"],
["G", "E", "G", "G", "G", "G", "G", "E", "G", "G", "G", "G", "G", "G", "G"]
        ];

cleanYard(yard);