function intersection(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    const map = new Map<number, boolean>();
    for (const item of arr1) {
        map.set(item, true);
    }
    for (const el of arr2) {
        if (map.get(el)) {
            result.push(el);
        }
    }
    return result;
}

console.log(intersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]));
