// var x=prompt("enter a number");
// var y=prompt("enter another number");
// var z= x+y;
// console.log("The sum of " + x + " and " + y + " is: " + z);
//because prompt() is a browser-specific function and does not work in Node.js, which is a server-side environment.ecause prompt() is a browser-specific function and does not work in Node.js, which is a server-side environment.



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(x) {
  rl.question("Enter another number: ", function(y) {
    const sum = parseFloat(x) + parseFloat(y);
    console.log("The sum of " + x + " and " + y + " is: " + sum);
    rl.close();
  });
});

