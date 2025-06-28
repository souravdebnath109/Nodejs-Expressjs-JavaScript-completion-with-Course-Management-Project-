const normalarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reducearray = normalarray.reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0//starting value for the accumulator
);

console.log(reducearray); // This will log the sum of all items in the array