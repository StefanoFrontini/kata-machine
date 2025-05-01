function greatestNumber1(arr: number[]): number {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(greatestNumber1([3, 1, 6, 15]));

function greatestNumber2(arr: number[]): number {
    arr.sort((a, b) => (a < b ? -1 : 1));
    return arr[arr.length - 1];
}
console.log(greatestNumber2([3, 1, 6, 15]));

function greatestNumber3(arr: number[]): number {
    for (let i = 0; i < arr.length; i++) {
        let isIgreatest = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                isIgreatest = false;
            }
        }
        if (isIgreatest) {
            return arr[i];
        }
    }
    return arr[0];
}
console.log(greatestNumber3([3, 1, 6, 15]));
