function greatestProductOf3(arr: number[]): number {
    arr.sort((a, b) => (a < b ? -1 : 1));
    return arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
}
console.log(greatestProductOf3([4, 1, 6, 2]));
