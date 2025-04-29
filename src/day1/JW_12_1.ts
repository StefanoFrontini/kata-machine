function add_until_100(arr: number[]): number {
    console.log("rec");
    if (arr.length === 0) {
        return 0;
    }
    const remainderSum = add_until_100(arr.slice(1));
    if (arr[0] + remainderSum > 100) {
        return remainderSum;
    } else {
        return arr[0] + remainderSum;
    }
}
console.log(add_until_100([2, 3, 96]));
