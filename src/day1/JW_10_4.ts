type recArr = Array<number | recArr>;
function printNumbers(arr: recArr) {
    if (arr.length === 0) {
        return;
    }

    if (typeof arr[0] === "number") {
        console.log(arr[0]);
    }
    if (typeof arr[0] === "object") {
        printNumbers(arr[0]);
    }
    printNumbers(arr.slice(1));
}

const array = [
    1,
    2,
    3,
    [4, 5, 6],
    7,
    [8, [9, 10, 11, [12, 13, 14]]],
    [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
    33,
];

printNumbers(array);
