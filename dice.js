class Dice {
  constructor(sides) {
    this.sides = sides; 
    if (sides <= 2) {
      throw new Error("Dice aint got no 2 damn sides"); 
    }
  }

  get roll() {
    let diceRolls = []; 
    let i = 1;
    while (i <= this.sides) {
      diceRolls.push(i); 
      i += 1 ;
    }
    
    return diceRolls[Math.floor(Math.random()*diceRolls.length)];

  }
}

class DiceCup {
  constructor(bagOfDice) {
    this.dice = []; 
    this.bagOfDice = bagOfDice; 

    let index = 0; 

    for (let k in bagOfDice) {
      this.dice.push(new Dice(k).roll)
    }
  }

  get roll() {
    let total = 0; 

    for (let i = 0; i < this.dice.length; i ++) {
      total += this.dice[i]; 
    }

    return total;
  }
}


let normalDie = new Dice(6)
let twentySided = new Dice(20) 
let eightSided = new Dice(8) 
let fourSided = new Dice(4) 

let diceCup = new DiceCup({
                          6: 4,
                          20: 1,
                          8: 2,
                          4: 4
                          })

console.log(diceCup.roll);