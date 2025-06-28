let x = prompt("Enter a number:");
x = parseFloat(x);

let result = "";

if (isNaN(x)) {
  result = "Invalid number entered.";
} else {
  result += x + " number is entered...<br>";
  if (x > 0) {
    result += "Positive number is entered...";
  } else if (x < 0) {
    result += "Negative number is entered...";
  } else {
    result += "Zero is entered...";
  }
}

document.getElementById("result").innerHTML = result;
