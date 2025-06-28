// Select the h1, input, and button elements
var h1 = document.querySelector('h1');
var input = document.querySelector('input');
var button = document.querySelector('button');

// Add click event to the button
button.addEventListener('click', function () {
    console.log('Button clicked');
    h1.innerHTML = input.value;
});
