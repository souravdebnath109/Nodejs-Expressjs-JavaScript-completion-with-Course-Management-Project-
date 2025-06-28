let num1, num2, SubmitEvent;

const mycalculator = (
  num1,
  num2,
  myDisplayer = (sum) => {
    
    document.getElementById("demo").innerHTML += " " + sum;
  }
) => {
  let sum = num1 + num2;
  myDisplayer(sum);
};

mycalculator(5, 10);
