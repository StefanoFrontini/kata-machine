function findMissingNumber(arr: number[]): number | null {
    arr.sort((a, b) => (a < b ? -1 : 1));
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i;
        }
    }
    return null;
}

console.log(findMissingNumber([5, 2, 4, 1, 0]));
