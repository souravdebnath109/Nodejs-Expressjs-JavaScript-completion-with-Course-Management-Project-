const normalarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterarray = normalarray.filter(
    (item) => {
        return item < 10;
    }
);

console.log(filterarray); // This will log all items