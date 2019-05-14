let colorCodes = [31, 32, 33, 34, 35, 36, 37, 38];
let rand = colorCodes[Math.floor(Math.random() * colorCodes.length)];
let colorize = '\x1b[34m%s\x1b';

// console.log(colorize, 'abraham');


function colorWord(word) {
  let colors = [31, 32, 33, 34, 35, 36, 37, 38];
  let rand = colors[Math.floor(Math.random() * colors.length)];
  let colorMagic = '\x1b[35m%s\x1b';

  console.log(colorMagic, 'abe');
}


console.log(colorWord('fds'));
// let colorize = '\x1b[5m%s\x1b';
// '\x1b[5m%s\x1b'; --> blinking 
// '\x1b[36m%s\x1b'; --> color 