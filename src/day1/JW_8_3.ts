const alphabet = [
    ["a", false],
    ["b", false],
    ["c", false],
    ["d", false],
    ["e", false],
    ["f", false],
    ["g", false],
    ["h", false],
    ["i", false],
    ["j", false],
    ["k", false],
    ["l", false],
    ["m", false],
    ["n", false],
    ["o", false],
    ["p", false],
    ["q", false],
    ["r", false],
    ["s", false],
    ["t", false],
    ["u", false],
    ["v", false],
    ["w", false],
    ["x", false],
    ["y", false],
    ["z", false],
] as const;

const alphabetMap = new Map<string, boolean>(alphabet);

function missingLetter(str: string): string {
    for (const el of str) {
        if (el === " ") {
            continue;
        }
        alphabetMap.set(el, true);
    }
    for (const item of alphabetMap) {
        if (!item[1]) {
            return item[0];
        }
    }
    return "";
}
console.log(missingLetter("the quick brown box jumps over a lazy dog"));
