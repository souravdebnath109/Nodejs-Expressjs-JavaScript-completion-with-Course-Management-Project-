// Function to check the number using async/await
async function checkNumber() {
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

  try {
    // Wait for the promise to finish
    const result = await promise;
    console.log(result);
    document.body.innerHTML += `<p style="color:green">${result}</p>`;
  } catch (error) {
    console.error(error);
    document.body.innerHTML += `<p style="color:red">${error}</p>`;
  }
}

// Call the async function
checkNumber();
