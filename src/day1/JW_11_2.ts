function even(arr: number[]): number[] {
    if (arr.length <= 0) {
        return [];
    }
    if (arr[0] % 2 === 0) {
        return [arr[0], ...even(arr.slice(1))];
    } else {
        return even(arr.slice(1));
    }
}

console.log(even([1, 2, 3, 4, 5, 6, 18, 21]));
