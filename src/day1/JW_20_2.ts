function missingInteger(arr: number[]): number | undefined {
    const map = new Map<number, boolean>();
    for (let num of arr) {
        map.set(num, true);
    }
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(i)) {
            return i;
        }
    }
    return undefined;
}

const t = [2, 3, 0, 6, 1, 5];
const t2 = [8, 2, 3, 9, 4, 7, 5, 0, 6];

console.log(missingInteger(t));
console.log(missingInteger(t2));
