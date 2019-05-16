// except multiples of 3 print "Fizz", 
// multiples of 5 print "Buzz"
// multiples of 15 print "FizzBuzz").

function fizzBuzz(n) {
  let i = 1; 
  while (i <= n) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log("Fizz"); 
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
    i += 1;
  }
}

fizzBuzz(100);
