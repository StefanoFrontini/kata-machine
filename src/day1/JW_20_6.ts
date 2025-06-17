//  [10, 5, 12, 3, 55, 30, 4, 11, 2] -> 2-3-4-5
// [19, 13, 15, 12, 18, 14, 17, 11] -> 11-12-13-14-15

function longestConsecutiveSequence(arr: number[]): number {
    const map = new Map<number, boolean>();
    for (let num of arr) {
        map.set(num, true);
    }

    let maxLength = 0;
    let i = 1;
    for (let el of arr) {
        if (!map.has(el - 1)) {
            while (map.has(el + i)) {
                i++;
            }
            if (i > maxLength) {
                maxLength = i;
            }
            i = 1;
        }
    }
    return maxLength;
}

console.log(longestConsecutiveSequence([10, 5, 12, 3, 55, 30, 4, 11, 2]));
console.log(longestConsecutiveSequence([19, 13, 15, 12, 18, 14, 17, 11]));
