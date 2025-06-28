const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(x) {
  const num = parseInt(x);

  if (num < 0) {
    console.log("x is less than 0");
  } else if (num === 0) {
    console.log("x is equal to 0");
  } else if (num > 0) {
    console.log("x is greater than 0");
  } else {
    console.log("Invalid input");
  }

  rl.close();
});
