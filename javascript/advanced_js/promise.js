// Ask user for a number
let userInput = prompt("Enter a number:");

// Convert to number
let num = Number(userInput);

// Create the promise
const promise = new Promise((resolve, reject) => {
  if (num > 10) {
    resolve("✅ Promise is resolved: Number is greater than 10");
  } else {
    reject("❌ Promise is rejected: Number is 10 or less");
  }
});

// Handle the promise
promise
  .then((result) => {
    console.log(result);
    document.body.innerHTML += `<p style="color:green">${result}</p>`;
  })
  .catch((error) => {
    console.error(error);
    document.body.innerHTML += `<p style="color:red">${error}</p>`;
  });
