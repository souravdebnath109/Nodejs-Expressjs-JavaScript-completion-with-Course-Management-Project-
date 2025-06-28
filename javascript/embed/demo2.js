// ================== Array ==================
var arr = [10, 20, 30];
console.log(arr);
console.log(arr[1]);
document.getElementById("result").innerHTML += "<strong>Array:</strong> " + arr + "<br><br>";

// ================== Object ==================
var obj = {
  name: "sd",
  age: 30,
  city: "New York",
  country: "USA",
  hobbies: ["reading", "traveling", "coding"],
};
console.log(obj);
document.getElementById("result").innerHTML += "================<br>";
document.getElementById("result").innerHTML += "<strong>Object:</strong> " + JSON.stringify(obj) + "<br><br>";

// ================== Array of Objects ==================
var obj2 = [
  {
    name: "John",
    age: 25,
    city: "Los Angeles",
    country: "USA",
    hobbies: ["sports", "music", "art"],
  },
  {
    name: "rony",
    age: 25,
    city: "NYC",
    country: "USA",
    hobbies: ["sports", "traveling"],
  },
];
console.log(obj2);
document.getElementById("result").innerHTML += "================<br>";
document.getElementById("result").innerHTML += "<strong>Object Array:</strong> " + JSON.stringify(obj2) + "<br><br>";

// ================== Prompt + While Loop ==================
var x = prompt("Enter a number:");
x = parseInt(x);
document.getElementById("result").innerHTML += "================<br>";
while (x < 10) {
  console.log("The number is: " + x);
  document.getElementById("result").innerHTML += "The number is: " + x + "<br>";
  x++;
}

// ================== Do-While Loop ==================
var count = 1;
document.getElementById("result").innerHTML += "================<br>";
do {
  document.getElementById("result").innerHTML += "hello<br>";
  console.log("hello");
  count++;
} while (count <= 5);

// ================== For Loop ==================
document.getElementById("result").innerHTML += "================<br>";
var fruits = ["apple", "banana", "cherry"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  document.getElementById("result").innerHTML += "Fruit: " + fruits[i] + "<br>";
}

// ================== For-each Loop ==================
var colors = ["red", "green", "blue"];
document.getElementById("result").innerHTML += "================<br>";
colors.forEach(function(color) {
  console.log(color);
  document.getElementById("result").innerHTML += "Color: " + color + "<br>";
});

// ================== Function Declarations ==================
function display() {
  document.getElementById("result").innerHTML += "================<br>";
  console.log("Hello, World!");
  document.getElementById("result").innerHTML += "Hello, World!<br>";
}

var add = function (a, b) {
  let c = a + b;
  console.log("The sum is: " + c);
  document.getElementById("result").innerHTML += "================<br>";
  document.getElementById("result").innerHTML += "The sum is: " + c + "<br>";
  return c;
};

var sub = function (d) {
  let result = d - 5;
  console.log("The result is: " + result);
  document.getElementById("result").innerHTML += "The result is: " + result + "<br>";
  return result;
};

// ================== Function Calls ==================
display();
add(5, 10);
sub(add(5, 10));

//
document.getElementById("result").innerHTML += "================<br>";
document.getElementById("result").tagName("li")[0];
document.getElementsByClassName("exp");
;
