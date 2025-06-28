const car={
    color:"red",
    model_no:7,
    is_automatic:true,
}

const {color, model_no, is_automatic} = car;//destr

console.log(color); // red
console.log(model_no); // 7
console.log(is_automatic); // true

function printCarDetails({color, model_no, is_automatic}) {
    console.log(color);
    console.log(model_no);
    console.log(is_automatic);
}
printCarDetails(car); // red 7 true