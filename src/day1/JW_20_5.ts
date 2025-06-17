function sortReadings(arr: number[]): number[] {
    const map = new Map<number, number>();
    for (let el of arr) {
        console.log(el);
        if (map.has(el)) {
            let num = map.get(el) ?? 0;
            num++;
            map.set(el, num);
        } else {
            map.set(el, 1);
        }
    }
    const result: number[] = [];
    for (let i = 990; i >= 970; i--) {
        if (map.has(i / 10)) {
            let r = map.get(i / 10) ?? 0;
            for (let j = 0; j < r; j++) {
                result.push(i / 10);
            }
        }
    }
    return result;
}

console.log(
    sortReadings([98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1]),
);
